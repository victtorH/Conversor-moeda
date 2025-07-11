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
      function NovoPais(Moeda, preco){
        this.Moeda = Moeda;
        this.preco = preco;
        this.convertendo = ( CotaUSA, CotaBR, CotaBTC, CotaGBP)=>{
            Resum =  Math.ceil(preco * CotaUSA)
            Resdois = Math.ceil(preco * CotaBR)
            Restres = Math.ceil(preco * CotaBTC)
            Resqua = Math.ceil(preco * CotaGBP)
                if(Pais2.value == USA.Moeda){
                    PrimeiroValor.innerHTML = `R$${Valor.value}`
                    Resultado.innerHTML = `R$${Resum}`;
                    fotopais[1].src = 'assets\estados-unidos (1) 1.png'
                    PaisDois.innerHTML = 'USA'
                }else if(Pais2.value == Brasil.Moeda){
                    PrimeiroValor.innerHTML = `R$${Valor.value}`
                    Resultado.innerHTML =`R$${Resdois}`
                    fotopais[1].src = 'assets/brasil 2.png'
                    PaisDois.innerHTML = 'Brasil'
                }else if(Pais2.value == Biticoin.Moeda ){
                    PrimeiroValor.innerHTML = `R$${Valor.value}`
                    Resultado.innerHTML = `R$${Restres}`
                    fotopais[1].src = 'assets/bitcoin 1.png'
                    PaisDois.innerHTML = 'Bitcoin'
                }else if(Pais2.value == Inglaterra.Moeda){
                    PrimeiroValor.innerHTML = `R$${Valor.value}`
                    Resultado.innerHTML = `R$${Resqua}`
                     fotopais[1].src = 'assets/libra 1.png'
                     PaisDois.innerHTML = 'Inglaterra'
                }
        }
      }
    //   A contagem funciona da seguinte forma:
      let USA = new NovoPais('Dolar',Valor.value)
      let Brasil = new NovoPais('Real',Valor.value)
     let Biticoin = new NovoPais('Bitcoin',Valor.value)
      let Inglaterra = new NovoPais('Libra',Valor.value)

      if(Pais1.value == USA.Moeda){
        USA.convertendo(null,5.53,0.0000086,0.74) 
        fotopais[0].src = 'assets/estados-unidos (1) 1.png'
        PaisUm.innerHTML = 'USA'
      }else if(Pais1.value == Brasil.Moeda){
        Brasil.convertendo(0.18,null,0.0000016,0.13)
        fotopais[0].src = 'assets/brasil 2.png'
         PaisUm.innerHTML = 'Brasil'
      }else if(Pais1.value == Biticoin.Moeda){
        Biticoin.convertendo(116190.50, 642835.37,null, 85709.28)
        fotopais[0].src = 'assets/bitcoin 1.png'
        PaisUm.innerHTML = 'Biticoin'
      }else if(Pais1.value == Inglaterra.Moeda){
        Inglaterra.convertendo(1.36, 7.50,0.000012, null)
        fotopais[0].src = 'assets/libra 1.png'
        PaisUm.innerHTML = 'Inglaterra'
      }

    }
})
