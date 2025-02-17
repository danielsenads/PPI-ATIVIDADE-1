//três parâmetros: 
// requisição, resposta next (prosseguir)
// os parâmetros são fornecodos automaticamente pelo express

export default function autenticar(requicao, resposta, next){
   if (requicao.session.autenticado === true){
     next();
   } else {
        resposta.redirect("/login");
   }
}


