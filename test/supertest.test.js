import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;

const requester = supertest("http://localhost:9090");

describe("Testing App Api Endpoints.", () => {
    describe("Testing Students Api", () => {
        // Test 01
        it("Crear Student: El API POST /api/students debe crear un student correctamente", async () => {
            // Given
            const studentMock = {
                name: "Carlos",
                lastName: "Perez",
                email: "carlitos@a.com",
                age: 20,
                password: "asasas",
                role: "user",
                courses:[]
            }


            // Then
            const { statusCode, _body } = await requester.post('/api/students').send(studentMock)
            // console.log(result);


            // Assert
            expect(statusCode).is.eqls(200)
            expect(_body.payload).is.ok.and.to.have.property("_id")
            expect(_body.payload).to.have.property(email)

        })


        // Test 02
        it("Buscar todos los students", async () => {

            // Given


            // Then
            const { statusCode, _body } = await requester.get('/api/students')


            // Assert
            expect(statusCode).is.eqls(200)
        })    
    });
    describe("Testing Courses Api", () => {
        // Test 01
        it("Crear Course: El API POST /api/courses/ debe crear course", async () => {
            // Given
            const courseMock = {
                title: "Curso BackEND",
                description: "NodeJS ExpressJS",
                teacherName: "Antonio Aljio",
                students: []
            }


            // Then
            const { statusCode, _body } = await requester.post('/api/courses').send(courseMock)
            // console.log(result);


            // Assert
            expect(statusCode).is.eqls(200)
            expect(_body.payload).is.ok.and.to.have.property("_id")

        })


        // Test 02
        it("Traer todos los carritos: El API GET /api/courses/ debe retornar todos los courses de mi app", async () => {

            // Then
            const { statusCode, _body } = await requester.get('/api/cart/')
            // console.log(_body.payload);

            // Assert
            expect(statusCode).is.eqls(200)
        })
    });
});