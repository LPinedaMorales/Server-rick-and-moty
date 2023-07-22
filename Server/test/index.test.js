const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", ()=>{
    describe( 'GET /character/:id',()=>{
        it( 'Responde con status: 200', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',async()=>{
            let response = await agent.get('/rickandmorty/character/1');
            const props = [
                "id", 
                "name", 
                "species", 
                "gender", 
                "status", 
                "origin" , 
                "image"
            ];
            
            props.forEach((prop)=>{
                expect(response.body).toHaveProperty(prop)
            })

        });
        it( 'Si hay un error responde con status: 500', async()=>{
            let response = await agent.get('/rickandmorty/character/18480803')
            expect(response.status).toBe(500)
        });

    });
    describe("GET /rickandmorty/login", ()=>{
        it('GET si  envias info correcta deberia return el access en true', async ()=>{
            let response = await agent.get("/rickandmorty/login?email=lucielvysjose@gmail.com&password=Password12")
            const access = {access: true}
            expect(response.body).toEqual(access)
        });
        it('GET si  envias info incorrecta deberia return el access en false', async ()=>{
            let response = await agent.get("/rickandmorty/login?email=lucielvys@gmail.com&password=Password12")
            const access = {access: false}
            expect(response.body).toEqual(access)
        });
        describe("Favorites", ()=>{  
      const character1= {id: 1, name :"Luci"};
    const character2 = {id: 2, name :"Chelvy"}  

    describe("POST /rickandmorty/fav", ()=>{


        it("POS deberia agregar el character a los favoritos", async()=>{

            let response = await agent.post("/rickandmorty/fav").send(character1)
            expect(response.body).toContainEqual(character1)
        });

        it("POS deberia contener los 2 character de favoritos", async()=>{

            let response = await agent.post("/rickandmorty/fav").send(character2)
            expect(response.body.length).toBe(2)
            expect(response.body).toContainEqual(character1)
            expect(response.body).toContainEqual(character2)
        });
        describe("DELETE /rickandmorty/fav/:id",()=>{

        it("debe devolver el carácter anterior al enviar datos incorrectos", async ()=>{
            let response = await agent.delete("/rickandmorty/fav/19")

           expect(response.body).toContainEqual(character1)
           expect(response.body).toContainEqual(character2)
        });
        it("debe eliminar la información de envío correcta", async ()=>{
            let response = await agent.delete("/rickandmorty/fav/1")

            expect(response.body).not.toBe(character1)
           expect(response.body).toContainEqual(character2)

        });
    });

    });
    });
     
});


    // describe("DELETE /rickandmorty/fav/:id",()=>{
    //     const character1= {id: 1, name :"Luci"};
    //     const character2 = {id: 2, name :"Chelvy"}
    //     it("debe devolver el carácter anterior al enviar datos incorrectos", async ()=>{
    //         let response = await agent.delete("/rickandmorty/fav/19")

    //        expect(response.body).toContainEqual(character1)
    //        expect(response.body).toContainEqual(character2)
    //     });
    //     it("debe eliminar la información de envío correcta", async ()=>{

    //     });
    // });
});