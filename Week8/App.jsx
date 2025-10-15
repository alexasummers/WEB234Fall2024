function ImAButton() {
  return (
    <button
      onMouseEnter={(e) => e.target.style.backgroundColor = 'lightblue'}
      onMouseLeave={(e) => e.target.style.backgroundColor = ''}
    >
      I am a button.
    </button>
  );
}

function ButtonWithHandler() {
	function handleClick() {
		alert('Good choice.');
	}

	return (
		<button onClick={handleClick}>
		Click me
		</button>
	);
	
	{/*can also be written as: 
	<button onClick={function handleClick() {
		alert('You clicked me!');
		}}>*/}
		
	{/*
	
	illegal (because it fires immediately during rendering with no clicks): <button onClick={handleClick()}>
	
	not illegal (because it waits for the user's click): <button onClick={handleClick}>
	
	illegal: <button onClick={alert('...')}>
	
	not illegal: <button onClick={() => alert('...')}>
	
	*/}
}

function EventHandlerProps({message, children}) {
	  return (
    <button onClick={() => alert(message)}>
      {children} {/* This is where the text of the buttons gets rendered-- children automatically contains what is nested inside the component tags */}
    </button>
  );
}

{/* event handlers as props */}
function EventHandlersAsPropsButton({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayTheMovie({ movie }) {
  function handlePlayClick() {
    alert(`${movie} is my favorite!`);
  }

  return (
    <EventHandlersAsPropsButton onClick={handlePlayClick}>
      Play "{movie}"
    </EventHandlersAsPropsButton>
  );
}

function UploadYourImage() {
  return (
    <EventHandlersAsPropsButton onClick={() => alert('Thank you, it is beautiful.')}>
      Give Me Your Headshot
    </EventHandlersAsPropsButton>
  );
}

{/* end of event handlers as props */}

{/* custom handler names */}
function CustomHandlerNameButton({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function TheGoods({ onPlayIceAge, onUploadHeadshot }) {
  return (
    <div>
      <CustomHandlerNameButton onClick={onPlayIceAge}>
        Watch Ice Age!
      </CustomHandlerNameButton>
      <CustomHandlerNameButton onClick={onUploadHeadshot}>
        Let me make fun of your photo
      </CustomHandlerNameButton>
    </div>
  );
}


{/* end of custom handler names */}

export default function App() {

return (
<>
<ImAButton />
<ButtonWithHandler />
    <div>
      <EventHandlerProps message="You pressed the button!">
        Press the button?
      </EventHandlerProps>
      <EventHandlerProps message="Good job!">
        Or not?
      </EventHandlerProps>
    </div>
	<div>
      <PlayTheMovie movie="Ice Age" />
      <UploadYourImage />
    </div>
	<TheGoods
      onPlayIceAge={() => alert('A cinematic masterpiece')}
      onUploadHeadshot={() => alert('This is just ok.')}
    />
</>
)
}
