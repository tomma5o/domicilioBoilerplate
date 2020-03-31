import {Link} from "preact-router/match";
import {Fragment} from "preact";

export default function Form() {
	return (
		<div class="about">
         <nav className="buttons flex justify-center md:justify-center items-center">
            <Link class="btn btn-gray"
                  href="/">Torna alla ricerca</Link>
            <a className="btn btn-blue" target="_blank" rel='noopener'
               href="https://bit.ly/fiumicinoadomicilio">Aggiungi un'attività</a>
         </nav>
            <h1>Un aiuto alla nostra città</h1>
            <div className="text">
               <p>
                  Siamo un gruppo di ragazzi che vivono a Fiumicino e che hanno a cuore la propria città.
               </p>

               <p>
                  Abbiamo realizzato questo sito web, partendo da un’idea di un ragazzo di Ferrara (Tommaso), per offrire un modo di continuare a operare in questo periodo particolare in cui il cambio di scenario in corso ci sta costringendo tutti a cambiare le nostre abitudini e ad evolvere.
               </p>

               <p>L’iniziativa è completamente gratuita e senza nessun fine economico, politico o di qualsiasi altro tipo.</p>

               <p>Chiunque può entrare in questa lista purché sia un’attività esistente e che offre servizi di consegna a domicilio dei propri prodotti in linea con le norme di sicurezza ed igiene vigenti.</p>

               <p>Aiutaci a diffondere questo progetto! Condividi con chi puoi!</p>
               <p>Grazie del tuo contributo prezioso.</p>

               <p>- Alessio, Enzo, Jonathan, Luca, Matteo.</p>
            </div>
		</div>
	);
}
