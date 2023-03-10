   let reading = [
   "When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting. Truly I tell you, they have received their reward in full. But when you fast, put oil on your head and wash your face, so that it will not be obvious to others that you are fasting, but only to your Father, who is unseen; and your Father, who sees what is done in secret, will reward you.",
   "Humble yourselves, therefore, under God’s mighty hand, that he may lift you up in due time.",
   "Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke? Is it not to share your food with the hungry and to provide the poor wanderer with shelter— when you see the naked, to clothe them, and not to turn away from your own flesh and blood?",
   "At once the Spirit sent him out into the wilderness, and he was in the wilderness forty days, being tempted by Satan. He was with the wild animals, and angels attended him.",
   "Therefore do not let anyone judge you by what you eat or drink, or with regard to a religious festival, a New Moon celebration or a Sabbath day. These are a shadow of the things that were to come; the reality, however, is found in Christ.",
   "So I turned to the Lord God and pleaded with him in prayer and petition, in fasting, and in sackcloth and ashes.",
   "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
   "As the deer pants for streams of water, so my soul pants for you, my God. My soul thirsts for God, for the living God. When can I go and meet with God?",
   "Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke?",
   "“I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.”",
   "Guide me in your truth and teach me, for you are God my Savior, and my hope is in you all day long.",
   "The Lord is good to those whose hope is in him, to the one who seeks him; it is good to wait quietly for the salvation of the Lord.",
   "Day 13",
   "Yes, my soul, find rest in God; my hope comes from him.",
   "“Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?",
   "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
   "But you must return to your God; maintain love and justice, and wait for your God always.",
   "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
   "Be joyful in hope, patient in affliction, faithful in prayer.",
   "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.",
   // Day 21
   "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
   "We wait in hope for the Lord; he is our help and our shield. In him our hearts rejoice, for we trust in his holy name. May your unfailing love be with us, Lord, even as we put our hope in you.",
   ""
   ]
 
 
 
 const verses = [
   // Day 1 -7
     {
        book: 'Matthew ',
        chapter: ' 6 ',
        verse: ' 16 - 18',
        reading: reading[0],
        day: 1
      },
      {
        book: '1 Peter ',
        chapter: '5',
        verse: ' 6 ',
        reading: reading[1],
        day: 2
      },
      {
        book: ' Isaiah ',
        chapter: 58,
        verse: ' 6 - 7',
        reading: reading[2],
        day: 3
      },
      {
        book: 'Mark ',
        chapter: 1,
        verse: ' 12 - 13 ',
        reading: reading[3],
        day: 4
      },
      {
        book: ' Colossians ',
        chapter: 2,
        verse: ' 16 - 17 ',
        reading: reading[4],
        day: 5
      },
      {
        book: ' Daniel ',
        chapter: 9,
        verse: ' 3',
        reading: reading[5],
        day: 6
      },
      {
        book: 'John ',
        chapter: 3,
        verse: ' 16',
        reading: reading[6],
        day: 7
      },
      
      // Day 8 - 14
     {
        book: 'Psalms ',
        chapter: 42,
        verse: ' 1 - 2',
        reading: reading[7],
        day: 8
      },
      {
        book: 'Isaiah ',
        chapter: 58,
        verse: ' 6',
        reading: reading[8],
        day: 9
      },
      {
        book: 'John ',
        chapter: 16,
        verse: ' 33',
        reading: reading[9],
        day: 10
      },
      {
        book: 'Psalms',
        chapter: 25,
        verse: ' 5',
        reading: reading[10],
        day: 11
      },
      {
        book: 'Lamentations ',
        chapter: 3,
        verse: ' 25 - 26',
        reading: reading[11],
        day: 12
      },
      {
        book: 'Day ',
        chapter: 13,
        verse: ' Not available',
        reading: reading[12],
        day: 13
      },
      {
        book: ' Psalms ',
        chapter: 62,
        verse: ' 5',
        reading: reading[13],
        day: 14
      },
      
      // Day 15 - 21
     {
        book: ' Matthew ',
        chapter: 6,
        verse: ' 25',  
        reading: reading[14],
        day: 15
        },
      {
        book: '2 Timothy ',
        chapter: 1,
        verse: ' 7',   
        reading: reading[15],
        day: 16
        },
      {
        book: 'Hosea ',
        chapter: 12,
        verse: ' 6',
        reading: reading[16],
        day: 17
      },
     {
        book: ' Matthew ',
        chapter: 6,
        verse: ' 33',
        reading: reading[17],
        day: 18
      },
     {
        book: 'Romans ',
        chapter: 12,
        verse: ' 12',
        reading: reading[18],
        day: 19
      },
    {
        book: 'Jeremiah ',
        chapter: 29,
        verse: ' 1 ',
        reading: reading[19],
        day: 20
      },
      {
        book: 'Isaiah ',
        chapter: 40,
        verse: ' 31',
        reading: reading[20],
        day: 21
      },
      
      // Day 22 - 28
     {
        book: 'Philippians ',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading[21],
        day: 22
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading[22],
        day: 23
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading[23],
        day: 24
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading[24],
        day: 25
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading[25],
        day: 26
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading[26],
        day: 27
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading[27],
        day: 28
      },
      
      //Day 29  - 35
     {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading
      },
      
      // Day 36 - 40
     {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: '1 - 5',
        reading: reading
      },
      {
        book: 'Philippians',
        chapter: 4,
        verse: ' 1 - 5',
        reading: reading
      },

    ];

    function getDailyVerse() {
      const today = new Date();
      const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
      const verseIndex = dayOfYear % verses.length - 14;
      const verse = verses[verseIndex];

      // Display the daily verse on the website
     // const verseContainer = document.getElementById('verse-container');
      let cardHeader = document.querySelector('.card-header');
      let cardTitle = document.querySelector('.card-title');
      let cardText = document.querySelector('.card-text');
      let memoryVerse = document.querySelector('.verse');
      let dateNow = document.querySelector('.date-now');
      let dayNow = document.querySelector('.swap');
      
      
      /*  verseContainer.innerHTML = `
        <h2>${verse.book} ${verse.chapter}</h2>
        <p class="lead">${verse.verse}</p>
        <hr>
        <p class="text-muted">${today.toDateString()}</p>
      `; */
      cardTitle.textContent = verse.book + verse.chapter + " :" + verse.verse;;
       cardText.textContent = verse.reading;
        memoryVerse.textContent = verse.book + verse.chapter + " :" + verse.verse;
      dateNow.textContent = today.toDateString();
      dayNow.textContent = verse.day;
    }

    // Call the getDailyVerse function on page load
    getDailyVerse();
    
    