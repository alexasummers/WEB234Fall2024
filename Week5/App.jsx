function SkeletonMan() {
  return (
    <img
      className="skeletonMan"
      src="https://i.imgur.com/VB2gy8z.gif"
      alt="The Skeleton Man"
      width={500}
      height={500}
    />
  );
}

function SkeletonWar({things, size}) {
  return (
    <>
	<img
      className="skeletonWar"
      src={getUrl(things)}
      alt={getAltText(things)}
      width={size}
      height={size}
    />
	<h1> {getAltText(things)} </h1>
	</>

  );
}

function getAltText(things) {
  return (
    'This is a picture of ' +
    things.action +
	' and his name is ' +
	things.name
  );
}

function getUrl(things) {
	return (
	'https://i.imgur.com/' +
	things.id +
	'.gif'
	);
}

export default function Gallery() {
  return (
  <>
    <SkeletonMan />
	<SkeletonWar
		things={{ name: 'Randy', action: 'the skeleton war', id: '7WZphqL' }} //prop 1
		size={400} //prop 2
	/>
	<SkeletonWar
		things={{name: 'Winston', action: 'the REAL skeleton war', id: 'sOhgJ55' }}
		size={300}
	/>
  </>
  );
}
