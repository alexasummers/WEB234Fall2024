import { useState } from 'react';

function Display({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="display">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

function Characters() {
  return (
    <>
      <h2>Spongebob</h2>
      <Display title="The Characters">
        Spongebob
		Patrick
		Sandy
      </Display>
      <Display title="Where They Live">
        Pineapple Rock Anchor
      </Display>
    </>
  );
}

function Characters2() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Spongebob</h2>
      <Display2
        title="The Characters"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Spongebob Patrick Sandy
      </Display2>
      <Display2
        title="Where They Live"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Pineapple Rock Anchor
      </Display2>
    </>
  );
}

function Display2({ title, children, isActive, onShow}) {
  return (
    <section className="Display2">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}




export default function() {
return(
<>
<Characters />
<h2> ----------------------------- </h2>
<Characters2 />
</>
);
}
