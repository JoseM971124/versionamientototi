//Codigo para encriptar
function encriptar(palavra){

    palavra=palavra.split(""); //converter para array para fácil conversão
    
    let letras = ["e", "i" , "a" ,"o" , "u"]; //Crie arrays com vogais 
    
    let cripto = ["enter", "imes", "ai", "ober", "ufat"]; //e suas substituições
    
        for(i =0; i<letras.length; i++){ //inicie um for para percorrer o vetor de vogais
    
            for(j = 0; j < palavra.length; j++){ // depois outro para dentro para percorrer a palavra e começar a comparar
                  
                if (letras[i]==palavra[j]) //então se as vogais coincidir...
                    palavra[j]=cripto[i]; //aqui eles são substituídos, pois  os coloque na mesma posição em ambos os vetores
            }
        }
    
        var palavra= ""+palavra; //aqui eu converto o array para string ;)
        palavra=palavra.replace(/,/g,'');//e aqui removo as vírgulas
        return palavra;//para logo retornar
    }
    
    
    function desencriptar(palavra){
    
            /*nesta função use um switch
            que simplesmente quando você
            encontrará uma vogal substituta,
            pois já está pré-definido qual 
            é a palavra a substituir*/
    
        for(l=0;l<palavra.length;l++){
            switch (palavra[l]) {
                case "e":
                        palavra=palavra.replace("enter","e");
                    break;
                case "i":
                        palavra=palavra.replace("imes","i");
                    break;
                case "a":
                        palavra=palavra.replace("ai","a");
                    break;
                case "o":
                        palavra=palavra.replace("ober","o");
                    break;
                case "u":
                        palavra=palavra.replace("ufat","u");
                    break;                  
                default:
                    break;
            }
        }
    
        return palavra;
    }
    
    
    function menu(){
    /*e fiz um menu com alert
    e prompt para o usuário "interagir"*/
        var op = prompt("Bem vindo\nO que você gostaria de fazer?\n1) Criptografar\n2) Descriptografar");
    
        if (op ==1){
            let palavra = prompt("Escreva uma palavra");
            alert(encriptar(palavra));
        }else if(op ==2){
            let palavra = prompt("Escreva uma palavra");
            alert(desencriptar(palavra));
        }else{
            alert("opção errada");
            menu();
        }
    
        menu();
    }
    
    menu();
