//  npm install mocha --global

var assert = require('assert');

var tools = require('.\\tools');

describe('Array', function(){
    describe('#indexOf()', function(){
        it('palauttaa -1 jos arvoa ei ole listassa', function(){
            assert.strictEqual(-1, [1,2,3].indexOf(4));
        });
        it('Palauttaa 1, kun arvo "koira" on listassa indeksillä 1', function(){
            assert.strictEqual(1, ["kissa","koira","kala"].indexOf("koira"));  
        });
    });
});

// ns. otsikko, jonka callback funktioon voidaan määrittää testejä (tai lisäotsikko)
describe('Laskuri', function(){ 
    it('palauttaa 5, jos funktioon syöttää 3', function(){
        assert.strictEqual(5,tools.addTwo(3));
    })
})

describe('Potenssitestit', function(){ 
    it('palauttaa 0.25, jos funktioon syöttää 0.5', function(){
        assert.strictEqual(0.25,tools.toiseenPotenssiin(0.5));
    })
    it('palauttaa 4, jos funktioon syöttää 2', function(){
        assert.strictEqual(4,tools.toiseenPotenssiin(2));
    })
    it('palauttaa 4, jos funktioon syöttää -2', function(){
        assert.strictEqual(4,tools.toiseenPotenssiin(-2));
    })
    it('palauttaa 0, jos funktioon syöttää 0', function(){
        assert.strictEqual(0,tools.toiseenPotenssiin(0));
    })
})

describe('Hetutarkistin', function(){
    it('Palauttaa true jos hetu on validi', function(){
        assert.strictEqual(true, tools.isValidHetu("280199-972S"));
    });
    it('Palauttaa true jos helmikuu toimii karkausvuonna', function(){
        assert.strictEqual(true, tools.isValidHetu("290204A972P"));
    });
    it('Palauttaa false jos hetu on liian pitkä', function(){
        assert.strictEqual(false, tools.isValidHetu("280199-9721S"));
    });
    it('Palauttaa false jos hetu on liian lyhyt', function(){
        assert.strictEqual(false, tools.isValidHetu("280199-21S"));
    });
    it('Palauttaa false jos päivä on liian pieni', function(){
        assert.strictEqual(false, tools.isValidHetu("000199-972P"));
    });
    it('Palauttaa false jos päivä on liian suuri', function(){
        assert.strictEqual(false, tools.isValidHetu("320199-972B"));
    });
    it('Palauttaa false jos kuukausi on liian suuri', function(){
        assert.strictEqual(false, tools.isValidHetu("321399-9721"));
    });
    it('Palauttaa false jos päivämäärä sisältää muita kuin numeroita', function(){
        assert.strictEqual(false, tools.isValidHetu("321a99-9721"));
    });
    it('Palauttaa false jos järjestysluku ei ole numero', function(){
        assert.strictEqual(false, tools.isValidHetu("320199-9w2B"));
    });
    it('Palauttaa false välimerkki on väärä', function(){
        assert.strictEqual(false, tools.isValidHetu("280199/972S"));
    });
    it('Palauttaa false jos helmikuu ei toimi', function(){
        assert.strictEqual(false, tools.isValidHetu("290200A972N"));
    });
    it('Palauttaa false jos tarkistusmerkki on väärin', function(){
        assert.strictEqual(false, tools.isValidHetu("280199-973S"));
    });

})

describe('CheckDates', function(){
    describe('isValidDate() eli validoidaan päivämääriä', function(){
        it('Palauttaa false, jos annetaan väärän muotoinen päivämäärä', function(){
            assert.strictEqual(false, tools.isValidDate("12/01/2020"));
        });
        it('Palauttaa false, jos kuukausi on väärin', function(){
            assert.strictEqual(false, tools.isValidDate("13.13.2020"));
        });
        it('Palauttaa false, jos päivä on väärin', function(){
            assert.strictEqual(false, tools.isValidDate("32.12.2020"));
        });
        it('Palauttaa true tästä päivästä', function(){
            assert.strictEqual(true, tools.isValidDate("17.11.2020"));
        });
        it('Palauttaa false, jos syötetään ihan höpöä sinne', function(){
            assert.strictEqual(false, tools.isValidDate("höpöhöpö"));
        });
        it('Palauttaa false, jos päivämäärä on 31.11.2020', function(){
            assert.strictEqual(false, tools.isValidDate("31.11.2020"));
        });
        it('Palauttaa true karkauspäivänä 29.2.2020', function(){
            assert.strictEqual(true, tools.isValidDate("29.2.2020"));
        });
        it('palauttaa false 29.2.2021', function(){
            assert.strictEqual(false, tools.isValidDate("29.2.2021"));
        })
    })
});