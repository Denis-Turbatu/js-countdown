# DESCRIZIONE
Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
Iniziate stampando il countdown nella console e dopo stampatelo in pagina.

CHI PROVA AD USARE IL CICLO FOR PER QUESTO ESERCIZIO SARÀ MANDATO INDIETRO NEL TEMPO PER RIVEDERE LA LEZIONE DI OGGI 

Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.

#### Bonus per i più curiosi:
In una cartella a parte create il cronometro che mostra secondi e minuti.
Inserite un bottone per avviare il cronometro, un'altro bottone per stoppare il cronometro e un'altro bottone ancora per resettare il cronometro.
Dopo averlo implementato fatevi questa domanda:
che cosa succede se utente clicca sull'avvia più volte?

## SOLUZIONE COUNTDOWN

### INPUT

- [X] Bottone di avvio countdown
    - [X] addEventListener per percepire il bottone cliccato
    - [X] Lanciare funzione avviaCountdown()

### ESECUZIONE LOGICA

- [X] Countdown funzionante
    - [X] Dentro avviaCountdown() con setTimeout() impostiamo 10sec di countdown
    - [] Ad ogni secondo andiamo a ritroso con la stampa dei numeri, quindi setTimeout aumenta di un secondo mentre la scritta scende di un secondo

### OUTPUT

- [X] Stampa risultato
    - [X] Alla fine del countdown impostiamo una condizione dove lancerà il nostro messaggio di 'Buon Anno'
    ```
     Se(setTimeout == finito){
        stampa "Buon Anno"
     }
    
    ```

> Bonus

## SOLUZIONE CRONOMETRO

### INPUT

- [] Bottone di avvio countdown
    - [] addEventListener per percepire il bottone di avvio
    - [] addEventListener per percepire il bottone di stop
    - [] Lanciare funzione avviaCronometro()

### ESECUZIONE LOGICA

- [] Countdown funzionante
    - [] Dentro avviaCronometro() con setIntervall()
    - [] Quando si preme il bottone dello Stop usiamo la funzione clearIntervall(avviaCronometro)

### OUTPUT

- [] Stampa risultato
    - [] Durante il funzionamento del cronometro verrà mostrato con l'aggiornamento ogni secondo