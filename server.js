// import packages
const express = require('express');
const path = require('path');
//const fileupload = require('express-fileupload');

// store public folder path
let initial_path = path.join(__dirname, "public");
console.log(`initial path: ${initial_path}`);

// server 
const app = express();
//app.use(express.static(initial_path));
//app.use(fileupload());

// routes
//app.get('/', (req, res) => {
//    res.sendFile(path.join(initial_path, "home.html"));
//})

// run server
app.listen(3001, () => {
    console.log("Server running on port 3000");

    /*
    app.get("/teste", (req, res, next) => {
        const resp = {
            Errors: [],
            Total: 6,

            Vendas: [
                { Data: '03/09/2019', ValorVenda: 35.98, Cupons: [ 
                    { Filial: 586, Caixa: 52, QtdCupons: 2 }, 
                    { Filial: 532, Caixa: 85, QtdCupons: 0 } ] 
                },
                { Data: '12/09/2019', ValorVenda: 35.98, Cupons: [ 
                    { Filial: 586, Caixa: 52, QtdCupons: 5 }, 
                    { Filial: 532, Caixa: 85, QtdCupons: 0 } ] 
                },
                { Data: '23/09/2019', ValorVenda: 35.98, Cupons: [ 
                    { Filial: 586, Caixa: 52, QtdCupons: 9 }, 
                    { Filial: 532, Caixa: 85, QtdCupons: 0 } ] 
                },
                { Data: '24/09/2019', ValorVenda: 35.98, Cupons: [ 
                    { Filial: 586, Caixa: 52, QtdCupons: 8 }, 
                    { Filial: 532, Caixa: 85, QtdCupons: 7 } ] 
                },
                { Data: '25/09/2019', ValorVenda: 35.98, Cupons: [ 
                    { Filial: 586, Caixa: 52, QtdCupons: 16 }, 
                    { Filial: 532, Caixa: 85, QtdCupons: 12 } ] 
                },
                { Data: '26/09/2019', ValorVenda: 35.98, Cupons: [ 
                    { Filial: 586, Caixa: 52, QtdCupons: 0 }, 
                    { Filial: 532, Caixa: 85, QtdCupons: 14 } ] 
                },

            ],

        };
    res.json(resp);
    });
*/

});
