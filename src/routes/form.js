import {Link} from "preact-router/match";
import {Fragment} from "preact";

export default function Form() {
	return (
		<div class="about">
         <div className="mobile-buttons">
            <Link href='/'><img src="assets/icons/back.svg" className="info"/></Link>
            <a className="btn btn-blue" target="_blank" rel='noopener'
               href="https://bit.ly/fiumicinoadomicilio">Aggiungi un'attività</a>
         </div>
         <nav className="buttons flex justify-center md:justify-center items-center">
            <Link class="btn btn-gray"
                  href="/">Torna alla ricerca</Link>
            <a className="btn btn-blue" target="_blank" rel='noopener'
               href="https://bit.ly/fiumicinoadomicilio">Aggiungi un'attività</a>
         </nav>
            <h1>Un aiuto alla nostra città</h1>
            <div className="text">
               <p>
                  Siamo un gruppo di ragazzi che vivono a Fiumicino e che hanno a cuore la propria città. Partendo dall’idea di Tommaso, un ragazzo di Ferrara, abbiamo voluto realizzare fiumicinoadomicilio.it, un sito web che offre alle attività produttive ancora aperte del nostro Comune di poter continuare a lavorare, offrendo prodotti e servizi a tutti noi che dobbiamo restare a casa. In questo momento particolare, in cui il cambio di scenario in corso sta costringendo tutti noi a cambiare le nostre abitudini, abbiamo voluto dare il nostro piccolo contributo a supporto della comunità.
               </p>

               <p>
                  L’iniziativa è completamente gratuita e senza alcun fine economico, commerciale, politico o di qualsiasi altro tipo.
               </p>

               <p>Chiunque abbia un’attività ancora aperta ai sensi dell’ultimo DPCM e che offra consegne a domicilio in linea con le norme di sicurezza ed igiene vigenti, può registrarsi ed entrare nella piattaforma.
                  Aiutaci a diffondere il progetto, condividi con chi puoi!</p>

               <p>Chiunque può entrare in questa lista purché sia un’attività esistente e che offre servizi di consegna a domicilio dei propri prodotti in linea con le norme di sicurezza ed igiene vigenti.</p>

               <p>Grazie per il tuo prezioso contributo.
               </p>

               <p>- Alessio, Enzo, Jonathan, Luca, Matteo.</p>
            </div>
		</div>
	);
}
