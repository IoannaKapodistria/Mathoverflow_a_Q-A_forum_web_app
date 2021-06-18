## Φόρουμ ερωτήσεων και απαντήσεων επιστημονικών θεμάτων που αφορούν τον κλάδο των Μαθηματικών #

Η εφαρμογή έχει δημιουργηθεί με τεχνολογίες  HTML,CSS, Bootstrap, Javascript, PostgreSQL, Express.Js
Η εφαρμογή εκτελείται με npm run watch στο  localhost και θύρα 3000 και χρειάζεται τα αντίστοιχα dependences που βρίσκονται στο package.json. Στο αρχείο config/database.js μπορείτε να βάλετε τα δικά σας στοιχεία βάσης. 

Η εφαρμογή αποτελείται από τους παρακάτω φακέλους και ακολουθεί το MVC μοντέλο:

* /db_models: περιέχει τα μοντέλα τύπου Sequelize, δηλαδή user_model, question_model, answer_model.  Στο /config/extra_setup.js προστίθενται τα associations των μοντέλων.

* /db_controllers: περιέχει τα αρχεία user_controller, question_controller που είναι οι controllers της βάσης δεδομένων

* /routes : περιέχει τις διαδρομές που υλοποιεί η εφαρμογή. 

* /routes_function: περιέχει ένα πρώτο επίπεδο συναρτήσεων οι οποίες οδηγούν στους φακέλους question_controller και user_controller που βρίσκονται οι βασικές συναρτήσεις που χειρίζονται τα αντίστοιχα μοντέλα της βάσης δεδομένων.

* /views: περιέχει τα templates σε μορφή handlebars.

* /public: περιέχει αρχεία που αφορούν τη μεριά του client, όπως css, javascript και τους φακέλους με τις εικόνες που χρησιμοποιήθηκαν. 
