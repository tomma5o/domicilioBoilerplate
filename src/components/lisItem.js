import { useState } from 'preact/hooks';

export const ListItem = ({ name, website, email, phone, description}) => {
	const [open, setOpen] = useState(false);

	const encodedName = encodeURIComponent(name);
	const encodedCity = encodeURIComponent(process.env.PREACT_APP_CITY);
	const searchUrl = `https://www.google.com/search?q=${encodedName}%20${encodedCity}`;

	function handleClick() {
      setOpen(!open);
	}

	const status = open?'open':'';
	const classes = `list_item ${status}`;

	return (
		<div className={classes}>
			<div class="flex justify-between items-center">
					<h2>{name}</h2>
               <div class="meta">
                  <a href={website}><img className="icon" src='/assets/icons/web.svg'/></a>
                  <a href={`mailto:${email}`}><img  class="icon" src='/assets/icons/mail.svg'/></a>
                  <a href={`tel:${phone}`}><img  class="icon" src='/assets/icons/phone.svg'/></a>
               </div>
         </div>


         <div class="text">
           {/* {open && (*/}
               <pre>
               {description}
               </pre>
{/*
            )}
*/}
         </div>

         <button onClick={handleClick} className="switcher">{open?'Chiudi la descrizione':'Leggi la descrizione'}</button>

      </div>
	);
};
