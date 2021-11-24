const app = require("../app")
const request = require("supertest")

const standardRespone = {
    status: expect.any(Number),
    description: expect.any(String),
    result: expect.any(Array)
}

    const members = {
        code: "test",
        nama: "Agatha Christie",
        borrow1:1,
        borrow:2
    }

describe("service /members", () => {

    describe("GET /members", () => {

        test("harus mengembalikan statuscode 200", async () => {
            const respone = await request(app).get("/members")
            expect(respone.statusCode).toBe(200)
        })

        test("harus mengembalikan standard respone", async () => {
            const respone = await request(app).get("/members")
            expect(respone.body).toEqual(expect.objectContaining(standardRespone))
        })
    })

    describe("POST /members", () => {

        test('harus mengembalikan status 200', async() => {
            try {
                const respone = await request(app).post('/members').send(members)
                expect(respone.statusCode).toBe(200)
            } catch (err) {
                console.log(`Error ${err}`)
            }
        }); 

        test("harus mengembalikan json sebagai tipe konten di header http", async () => {
            const respone = await request(app).post("/members").send(members)
            expect(respone.headers['content-type']).toEqual(expect.stringContaining('json'))
        })
    })


})
