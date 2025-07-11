 let Pais1 = document.querySelector('#De')
let Pais2 = document.querySelector('#Para')
let PaisUm = document.querySelector('.PaisUm')
let PaisDois = document.querySelector('.PaisDois') 
let ValorInicial = document.querySelector('.NValor')
let Resultado = document.querySelector('.Resultado')
let Valor = document.querySelector('.valores')
let PrimeiroValor = document.querySelector('.NValor')
let fotopais = document.querySelectorAll('.fotopais')

let converter = document.querySelector('.converter')


converter.addEventListener('click',( )=>{
    if(Pais1.value == Pais2.value){
        alert('[ERRO]Não é possivel fazer conversão com a mesma moeda')
    }else{
      function NovoPais(Moeda, preco,){
        this.Moeda = Moeda;
        this.preco = preco;
        this.convertendo = ( CotaUSA, CotaBR, CotaBTC, CotaGBP,simbolo)=>{
            Resum =  preco * CotaUSA
            Resdois = preco * CotaBR
            Restres = preco * CotaBTC
            Resqua = preco * CotaGBP
                   

                if(Pais2.value == USA.Moeda){
                    PrimeiroValor.innerHTML = `${simbolo} ${Number(Valor.value).toFixed(2)}`
                    Resultado.innerHTML = `$ ${Resum.toFixed(2)}`;
                    fotopais[1].src = 'assets/estados-unidos (1) 1.png'
                    PaisDois.innerHTML = 'Dolar'
                }else if(Pais2.value == Brasil.Moeda){
                    PrimeiroValor.innerHTML = `${simbolo} ${Number(Valor.value).toFixed(2)}`
                    Resultado.innerHTML =`R$ ${Resdois.toFixed(2)}`
                    fotopais[1].src = 'assets/brasil 2.png'
                    PaisDois.innerHTML = 'Real'
                }else if(Pais2.value == Biticoin.Moeda ){
                    PrimeiroValor.innerHTML = `${simbolo} ${Number(Valor.value).toFixed(2)}`
                    Resultado.innerHTML = `₿ ${Restres.toFixed(2)}`
                    fotopais[1].src = 'assets/bitcoin 1.png'
                    PaisDois.innerHTML = 'Bitcoin'
                }else if(Pais2.value == Inglaterra.Moeda){
                    PrimeiroValor.innerHTML = `${simbolo} ${Number(Valor.value).toFixed(2)}`
                    Resultado.innerHTML = `€ ${Resqua.toFixed(2)}`
                     fotopais[1].src = 'assets/libra 1.png'
                     PaisDois.innerHTML = 'Libra'
                }
        }
      }
    //   A contagem funciona da seguinte forma:
      let USA = new NovoPais('Dolar',Valor.value)
      let Brasil = new NovoPais('Real',Valor.value,)
     let Biticoin = new NovoPais('Bitcoin',Valor.value)
      let Inglaterra = new NovoPais('Libra',Valor.value)
    
      if(Pais1.value == USA.Moeda){
        USA.convertendo(null,5.53,0.0000086,0.74,'$') 
        fotopais[0].src = 'assets/estados-unidos (1) 1.png'
        PaisUm.innerHTML = 'Dolar'
      }else if(Pais1.value == Brasil.Moeda){
        Brasil.convertendo(0.18,null,0.0000016,0.13,'R$')
        fotopais[0].src = 'assets/brasil 2.png'
         PaisUm.innerHTML = 'Real'
      }else if(Pais1.value == Biticoin.Moeda){
        Biticoin.convertendo(116190.50, 642835.37,null, 85709.28,'₿')
        fotopais[0].src = 'assets/bitcoin 1.png'
        PaisUm.innerHTML = 'Biticoin'
      }else if(Pais1.value == Inglaterra.Moeda){
        Inglaterra.convertendo(1.36, 7.50,0.000012, null,'€')
        fotopais[0].src = 'assets/libra 1.png'
        PaisUm.innerHTML = 'Libra'
      }

    }
})
