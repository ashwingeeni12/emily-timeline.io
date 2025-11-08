import React, { useState } from 'react';

const TimelineVisualization = () => {
  const [view, setView] = useState('chronological');
  
  const events = [
    {
      id: 1,
      year: "~1850s-60s",
      event: "Emily's father drives away her suitors",
      section: "II",
      color: "#8B4513",
      chronOrder: 1,
      storyOrder: 5
    },
    {
      id: 2,
      year: "~1870s",
      event: "Emily turns thirty and remains unmarried",
      section: "II",
      color: "#8B4513",
      chronOrder: 2,
      storyOrder: 6
    },
    {
      id: 3,
      year: "~1880s",
      event: "Emily's father dies, and she denies his death for three days",
      section: "II",
      color: "#8B4513",
      chronOrder: 3,
      storyOrder: 7
    },
    {
      id: 4,
      year: "~1890s",
      event: "Colonel Sartoris remits Emily's taxes (1894)",
      section: "I",
      color: "#2F4F4F",
      chronOrder: 4,
      storyOrder: 2
    },
    {
      id: 5,
      year: "~1890s",
      event: "Homer Barron arrives in Jefferson and begins courting Emily",
      section: "III",
      color: "#556B2F",
      chronOrder: 5,
      storyOrder: 8
    },
    {
      id: 6,
      year: "~1890s",
      event: "The smell from Emily's house develops two years after her father's death",
      section: "II",
      color: "#8B4513",
      chronOrder: 6,
      storyOrder: 4
    },
    {
      id: 7,
      year: "~1890s",
      event: "The town spreads lime around her property at night to mask the smell",
      section: "II",
      color: "#8B4513",
      chronOrder: 7,
      storyOrder: 4.5
    },
    {
      id: 8,
      year: "~1895-96",
      event: "Emily buys arsenic from druggist",
      section: "III",
      color: "#556B2F",
      chronOrder: 8,
      storyOrder: 9
    },
    {
      id: 9,
      year: "~1896",
      event: "A minister visits Emily but refuses to return to the house again",
      section: "IV",
      color: "#483D8B",
      chronOrder: 9,
      storyOrder: 10
    },
    {
      id: 10,
      year: "~1896",
      event: "Emily's cousins from Alabama come to visit",
      section: "IV",
      color: "#483D8B",
      chronOrder: 10,
      storyOrder: 11
    },
    {
      id: 11,
      year: "~1896",
      event: "Emily purchases mens clothing and a silver toilet set engraved with initals H.B.",
      section: "IV",
      color: "#483D8B",
      chronOrder: 11,
      storyOrder: 12
    },
    {
      id: 12,
      year: "~1896",
      event: "Homer Barron returns to town and is last seen entering Emily's home",
      section: "IV",
      color: "#483D8B",
      chronOrder: 12,
      storyOrder: 13
    },
    {
      id: 13,
      year: "~1896-1902",
      event: "Emily becomes reclusive; her hair turns gray",
      section: "IV",
      color: "#483D8B",
      chronOrder: 13,
      storyOrder: 14
    },
    {
      id: 14,
      year: "~1902-09",
      event: "Emily gives china-painting lessons for several years",
      section: "IV",
      color: "#483D8B",
      chronOrder: 14,
      storyOrder: 15
    },
    {
      id: 15,
      year: "~1904",
      event: "Colonel Sartoris dies",
      section: "I",
      color: "#2F4F4F",
      chronOrder: 15,
      storyOrder: 3
    },
    {
      id: 16,
      year: "~1910s",
      event: "Next generation of leaders attempt to make Emily pay taxes",
      section: "I",
      color: "#2F4F4F",
      chronOrder: 16,
      storyOrder: 3.5
    },
    {
      id: 17,
      year: "~1920s-30s",
      event: "Emily refuses to accept postal service or numbering for her house",
      section: "IV",
      color: "#483D8B",
      chronOrder: 17,
      storyOrder: 16
    },
    {
      id: 18,
      year: "~1938",
      event: "Emily dies at age 74",
      section: "I & V",
      color: "#2F4F4F",
      chronOrder: 18,
      storyOrder: 1
    },
    {
      id: 19,
      year: "~1938",
      event: "Townspeople discover Homer Barron's decayed corpse and a strand of Emily's gray hair beside him",
      section: "V",
      color: "#8B0000",
      chronOrder: 19,
      storyOrder: 17
    }
  ];

  const sectionColors = {
    "I": { color: "#2F4F4F", label: "Section I (Death & Taxes)" },
    "II": { color: "#8B4513", label: "Section II (Father's Death & Smell)" },
    "III": { color: "#556B2F", label: "Section III (Homer's Arrival)" },
    "IV": { color: "#483D8B", label: "Section IV (Arsenic to Isolation)" },
    "V": { color: "#8B0000", label: "Section V (Discovery)" }
  };

  const sortedEvents = view === 'chronological' 
    ? [...events].sort((a, b) => a.chronOrder - b.chronOrder)
    : [...events].sort((a, b) => a.storyOrder - b.storyOrder);

  return (
    <div style={{
      width: '100%',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#F5F5DC',
      fontFamily: 'Georgia, serif',
      color: '#2C2416'
    }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'normal',
          textAlign: 'center',
          marginBottom: '10px',
          borderBottom: '3px double #2C2416',
          paddingBottom: '15px',
          letterSpacing: '2px'
        }}>
          A ROSE FOR EMILY
        </h1>
        <h2 style={{
          fontSize: '18px',
          fontWeight: 'normal',
          textAlign: 'center',
          fontStyle: 'italic',
          marginBottom: '30px',
          color: '#5C4A3A'
        }}>
          A Timeline of Decay
        </h2>
        
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          textAlign: 'justify',
          marginBottom: '30px',
          textIndent: '40px'
        }}>
          William Faulkner structures A Rose for Emily as a bunch of disordered memories, told through the perspective of the townspeople. The story opens with Emily Grierson's death and funeral, then moves backward through time exploring themes of rumor, grief, and decay. By invoking a nonlinear time structure, Faulkner turns a simple story about loss into an almost haunting story about memory, obsession, and fear of change. The following timeline reconstructs both the actual chronological sequence of events and the order in which Faulkner reveals them.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          marginBottom: '30px'
        }}>
          <button
            onClick={() => setView('chronological')}
            style={{
              padding: '12px 30px',
              backgroundColor: view === 'chronological' ? '#2C2416' : '#E8E0D5',
              color: view === 'chronological' ? '#F5F5DC' : '#2C2416',
              border: '2px solid #2C2416',
              cursor: 'pointer',
              fontFamily: 'Georgia, serif',
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            Chronological Order
          </button>
          <button
            onClick={() => setView('story')}
            style={{
              padding: '12px 30px',
              backgroundColor: view === 'story' ? '#2C2416' : '#E8E0D5',
              color: view === 'story' ? '#F5F5DC' : '#2C2416',
              border: '2px solid #2C2416',
              cursor: 'pointer',
              fontFamily: 'Georgia, serif',
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            story Order
          </button>
        </div>

        <div style={{
          backgroundColor: '#FFF8DC',
          padding: '20px',
          border: '2px solid #8B7355',
          marginBottom: '30px'
        }}>
          <h3 style={{
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#5C4A3A'
          }}>
            Story Sections:
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
            {Object.entries(sectionColors).map(([section, data]) => (
              <div key={section} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: data.color,
                  border: '1px solid #2C2416'
                }}></div>
                <span style={{ fontSize: '14px' }}>{data.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          left: '30px',
          top: 0,
          bottom: 0,
          width: '2px',
          backgroundColor: '#8B7355'
        }}></div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {sortedEvents.map((event) => (
            <div key={event.id} style={{ position: 'relative', paddingLeft: '70px' }}>
              <div style={{
                position: 'absolute',
                left: '20px',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: event.color,
                border: '3px solid #F5F5DC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: 'bold',
                color: '#F5F5DC'
              }}>
                {view === 'chronological' ? event.chronOrder : event.storyOrder}
              </div>
              
              <div style={{
                backgroundColor: '#FFF8DC',
                border: '1px solid #8B7355',
                borderLeft: `5px solid ${event.color}`,
                padding: '15px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '8px'
                }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    fontStyle: 'italic'
                  }}>
                    {event.year}
                  </h3>
                  <span style={{
                    fontSize: '11px',
                    backgroundColor: '#E8E0D5',
                    padding: '3px 8px',
                    border: '1px solid #8B7355',
                    letterSpacing: '0.5px'
                  }}>
                    SECTION {event.section}
                  </span>
                </div>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  marginBottom: '5px'
                }}>
                  {event.event}
                </p>
                {view === 'chronological' && (
                  <p style={{
                    fontSize: '12px',
                    color: '#5C4A3A',
                    fontStyle: 'italic',
                    marginTop: '8px'
                  }}>
                    Story Order #{event.storyOrder}
                  </p>
                )}
                {view === 'story' && (
                  <p style={{
                    fontSize: '12px',
                    color: '#5C4A3A',
                    fontStyle: 'italic',
                    marginTop: '8px'
                  }}>
                    Chronological Order #{event.chronOrder}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: '40px',
        backgroundColor: '#FFF8DC',
        padding: '25px',
        border: '2px solid #8B7355',
        borderTop: '5px solid #2C2416'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '15px',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Analysis
        </h3>
        <p style={{
          fontSize: '15px',
          lineHeight: '1.8',
          textAlign: 'justify',
          textIndent: '40px'
        }}>
          Faulkner's nonlinear timeline strengthens the Gothic mood the reader experiences from this story. By jumping through time, starting at Emily's funeral and working backward through scattered memories, Faulkner builds a sense of confusion that mirrors Emily's own state of mind. Emily is stuck in time, unable to tell the difference between the living and the dead, the past and the present, which the reader also experiences. The story's timeline keeps readers trapped in that same loop, circling the same moments like Emily's within her home. Time itself becomes part of the horror, enhancing the Gothic mood. 
        </p>
      </div>
    </div>
  );
};

export default TimelineVisualization;