import React, { useState } from "react";

const quranicReminders = [
  {
    verse: "Quran 2:45",
    reminder: "Seek help through patience and prayer.",
  },
  {
    verse: "Quran 3:139",
    reminder:
      "Do not lose hope or be grieved. You will certainly be victorious if you are true in faith.",
  },
  {
    verse: "Quran 4:29",
    reminder: "Do not waste your wealth in vain.",
  },
  {
    verse: "Quran 5:32",
    reminder:
      "Whoever kills a soul unjustly, it is as if they have killed all of humanity.",
  },
  {
    verse: "Quran 6:151",
    reminder:
      "Do not take life which Allah has made sacred except for a just cause.",
  },
  {
    verse: "Quran 7:31",
    reminder: "Eat and drink, but waste not.",
  },
  {
    verse: "Quran 8:46",
    reminder: "Obey Allah and His Messenger, and do not dispute.",
  },
  {
    verse: "Quran 9:71",
    reminder:
      "The believing men and believing women are allies of one another.",
  },
  {
    verse: "Quran 10:62",
    reminder: "Is there any reward for good other than good?",
  },
  {
    verse: "Quran 11:90",
    reminder: "Seek forgiveness from your Lord and repent to Him.",
  },

  {
    verse: "Quran 16:90",
    reminder: "Indeed, Allah commands justice and good conduct.",
  },
  {
    verse: "Quran 17:36",
    reminder: "And do not pursue that of which you have no knowledge.",
  },
  {
    verse: "Quran 18:110",
    reminder:
      "Say, 'I am only a man like you, to whom has been revealed that your god is one God.'",
  },
  {
    verse: "Quran 19:58",
    reminder:
      "These are the ones upon whom Allah bestowed favor from among the prophets.",
  },
  {
    verse: "Quran 20:114",
    reminder: "So high [above all] is Allah, the Sovereign, the Truth.",
  },
  {
    verse: "Quran 21:107",
    reminder:
      "And We have not sent you, [O Muhammad], except as a mercy to the worlds.",
  },
  {
    verse: "Quran 22:37",
    reminder: "Their meat will not reach Allah, nor will their blood.",
  },
  {
    verse: "Quran 23:13",
    reminder:
      "Then We made the sperm-drop into a clinging clot, and We made the clot into a lump [of flesh].",
  },
  {
    verse: "Quran 24:35",
    reminder: "Allah is the Light of the heavens and the earth.",
  },
  {
    verse: "Quran 25:63",
    reminder:
      "And the servants of the Most Merciful are those who walk upon the earth easily.",
  },
];

const VerseWidget = () => {
  const [randomReminder, setRandomReminder] = useState(null);

  const generateRandomReminder = () => {
    const randomIndex = Math.floor(Math.random() * quranicReminders.length);
    setRandomReminder(quranicReminders[randomIndex]);
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Quranic Reminder</h2>
      {randomReminder ? (
        <div>
          <p className="text-lg mb-1">{randomReminder.verse}</p>
          <p className="text-sm">{randomReminder.reminder}</p>
        </div>
      ) : (
        <p className="text-sm">Click the button to get a Quranic reminder.</p>
      )}
      <button
        className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md"
        onClick={generateRandomReminder}
      >
        Get Reminder
      </button>
    </div>
  );
};

export default VerseWidget;
