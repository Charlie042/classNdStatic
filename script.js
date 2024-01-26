//Creating a class

class Ginger {
     //instance property

    talent1 = 'Singing';
    talent2 = 'Sleeping';
    talent3 = 'dancing';
    
    //static property

    static numberOfTalent = 3;
// methods
    bestTalent(){
        console.log("Singing");
    }

    worseTalent(){
    console.log("dancing")
    }
    };
//initiating the object
    const talent = new Ginger();

    //to use or change the values in the object
    talent.talent1 = "Writing";

    //Accessing the class and static properties
   
    console.log(talent);
    console.log(Ginger.numberOfTalent);
// Acessing the methods
   
    talent.bestTalent();
    talent.worseTalent();

    