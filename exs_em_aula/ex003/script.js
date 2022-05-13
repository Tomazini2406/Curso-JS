function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano- Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
        genero = 'Homem'
            if(idade >= 0 && idade< 10){
                //criança
                img.setAttribute('src', 'Bebe_homem(edited).png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'Young_man(edited).png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homem_adulto(edited).png')
            }else{
                //idoso 
                img.setAttribute('src', 'Elder_man(edited).png')
            }
        }else if (fsex[1].checked){
        genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe_mulher(edited).png')
        }else if (idade < 21){
            img.setAttribute('src', 'young_woman(edited).png')
        }else if (idade < 50){
            img.setAttribute('src', 'mulher_adulta(edited).png')
        }else{
            img.setAttribute('src', 'Elder_woman(edited).png')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    }
}