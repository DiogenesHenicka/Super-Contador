function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel Contar!'
        //window.alert('[ERRO] Faltam Dados!!!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0) {
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `\u{1F449}${c}, `
            }
            
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `\u{1F449}${c},`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}
