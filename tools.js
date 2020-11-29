'use strict'

module.exports =
    {
        addTwo: function(num) {
            return num + 2;
        },

        toiseenPotenssiin: function(num) {
            return Math.pow(num,2);
        },

        isValidHetu: function(hetu) {
            var array= hetu.split("");
            console.log(array);
            console.log(array.length);
            
            //onko hetu oikean mittainen
            if (array.length!=11){
                console.log("väärän mittainen");
                return false;
            }
            console.log("hetu oikean mittainen");

            try{
                var i;
                var day;
                var month;
                var year;
                var hetuluku;
                var jakojäännös;
                var tarkistusluku;

                //Kääntyykö järjestysluku ja päivämäärä numeroiksi
                for (i=0; i<6; i++){
                    array[i]= parseInt(array[i]);
                }
                for (i=7; i<10; i++){
                    array[i]= parseInt(array[i]);
                }
                console.log("luvut käännetty");

                hetuluku=array[9]+array[8]*10+array[7]*100+array[5]*1000+array[4]*10000+array[3]*100000+array[2]*1000000+array[1]*10000000+array[0]*100000000

                console.log("hetuluku muodostettu");

                console.log(hetuluku);
                jakojäännös= hetuluku%31;  

                console.log(jakojäännös);

                console.log("jakojäännös muodostettu");

                //muodostetaan jakojäännös vastaamaan tarkistusmerkkiä, ei mikään nätti ratkaisu mutta toimii
                if (jakojäännös<10){
                    tarkistusluku=jakojäännös.toString(31);
                }
                if(jakojäännös==10){
                    tarkistusluku="A";
                }
                if(jakojäännös==11){
                    tarkistusluku="B";
                }
                if(jakojäännös==12){
                    tarkistusluku="C";
                }
                if(jakojäännös==13){
                    tarkistusluku="D";
                }
                if(jakojäännös==14){
                    tarkistusluku="E";
                }
                if(jakojäännös==15){
                    tarkistusluku="F";
                }
                if(jakojäännös==16){
                    tarkistusluku="H";
                }
                if(jakojäännös==17){
                    tarkistusluku="J";
                }
                if(jakojäännös==18){
                    tarkistusluku="K";
                }
                if(jakojäännös==19){
                    tarkistusluku="L";
                }
                if(jakojäännös==20){
                    tarkistusluku="M";
                }
                if(jakojäännös==21){
                    tarkistusluku="N";
                }
                if(jakojäännös==22){
                    tarkistusluku="P";
                }
                if(jakojäännös==23){
                    tarkistusluku="R";
                }
                if(jakojäännös==24){
                    tarkistusluku="S";
                }
                if(jakojäännös==25){
                    tarkistusluku="T";
                }
                if(jakojäännös==26){
                    tarkistusluku="U";
                }
                if(jakojäännös==27){
                    tarkistusluku="V";
                }
                if(jakojäännös==28){
                    tarkistusluku="W";
                }
                if(jakojäännös==29){
                    tarkistusluku="X";
                }
                if(jakojäännös==30){
                    tarkistusluku="Y";
                }
                console.log("tarkistusluku muodostettu:" +tarkistusluku);

                //onko välimerkki oikein?
                if(array[6]=="+"||array[6]=="-"||array[6]=="A"){
                    day=10*array[0]+array[1];
                    month=10*array[2]+array[3];
                    year=10*array[4]+array[5];

                    console.log("päivä:"+ day);
                    
                    console.log("kuukausi:"+ month);

                    console.log("vuosi:"+ year);


                    //onko kuukausi validi
                    if (month>12||month==0){
                        console.log("kuukausien määrä testi fail");
                        return false;
                    }

                    //onko päivä validi
                    if (day>31||day==0){
                        console.log("päivien määrä testi fail");
                        return false;
                    }

                    //testataan kuukaudet joissa on vain 30 päivää
                    if (day>30 && (month==4 || month==6 || month==9 || month==11)){
                        console.log("30 päiväinen kuukausi testi fail");
                        return false;
                    }

                    //jos tarkistusluku on väärin palautetaan false
                    if (array[10].toString()!=tarkistusluku){
                        console.log("Tarkistusluku fail");
                        return false
                    }

                    //testataan helmikuu
                    if (month == 2) {
                        if((year % 4 == 0) && (year != 0)){
                            if (day >= 1 && day <=29)
                                return true;
                        }
                        else {
                            if (day >= 1 && day <=28)
                                return true;
                        }
                        console.log("Helmikuu testi fail");
                        return false;
                    }
                   
                    //kaikki testit suoritettu, homma ok
                    return true;
                }
                else{
                    console.log("välimerkki väärin");
                    return false;
                }

            }
            catch (error){
                return false;
            }    
        },

        isValidDate: function (dateString) // Toimii ainoastaan jos pvm on muotoa d.m.y
        {
            var [day, month, year] = [];
            try {
                [day, month, year] = dateString.split(".")
                day = parseInt(day);
                month = parseInt(month);
                year = parseInt(year);
                if (month >= 1 && month <= 12) {
                    if ([1,3,5,7,8,10,12].some((x) => (x == month))){
                        if (day >= 1 && day <=31)
                            return true;
                    }
                    else {
                        if (month == 2) {
                            if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))){
                                if (day >= 1 && day <=29)
                                    return true;
                            }
                            else {
                                if (day >= 1 && day <=28)
                                    return true;
                            }
                        }
                        else {
                            if (day >= 1 && day <= 30)
                                return true;
                        }
                    }    
                }
                return false;
            }
            catch (error) {
                return false;
            }
        }
    }