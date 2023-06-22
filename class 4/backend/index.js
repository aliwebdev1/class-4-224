const experess = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 7000;

const app = experess();
// midleware
app.use(cors());
app.use(experess.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.guep9xh.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true, deprecationErrors: true,
    }
});

async function run() {
    try {
        const appointmentOptionCollectioin = client.db('final-project-224-1').collection('appointmentOptions');
        const bookingCollecion = client.db('final-project-224-1').collection('bookings');

        app.get('/appointmentOptions', async (req, res) => {
            const date = req.query.date;
            const query = {};
            const options = await appointmentOptionCollectioin.find(query).toArray();
            const bookingQuery = { appointmentDate: date };
            const alreadyBooked = await bookingCollecion.find(bookingQuery).toArray();

            options.forEach(option => {
                const optionBooked = alreadyBooked.filter(book => book.treatment === option.name);
                const bookedSlots = optionBooked.map(book => book.slot);
                // console.log(date, option.name, bookedSlots);
                const remainingSlots = option.slots.filter(slot => !bookedSlots.includes(slot))
                option.slots = remainingSlots;
            })
            res.send(options)
        })


        // booking post 
        app.post('/bookings', async (req, res) => {
            const booking = req.body;
            console.log(booking);
            const query = {
                appointmentDate: booking.appointmentDate,
                email: booking.email,
                treatment: booking.treatment
            }
            const alreadyBooked = await bookingCollecion.find(query).toArray();
            if (alreadyBooked.length) {
                const message = `You already have a booking on ${booking.appointmentDate}`
                return res.send({ acknowledged: false, message })
            }
            const result = await bookingCollecion.insertOne(booking);
            res.send(result)
        })



    } finally {

        // await client.close();
    }
}
run().catch(console.dir);






app.get('/', async (req, res) => {
    res.send('Doctor houser server is running');
})

app.listen(port, () => console.log(`Doctors Portal running on ${port}`))