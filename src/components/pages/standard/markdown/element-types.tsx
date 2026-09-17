function H1(props: Object) {
  return (
    <h1
      className="uppercase text-white font-serif text-3xl xl:text-4xl text-left text-balance mb-3 md:mb-8"
      {...props}
    />
  );
}

function H2(props: Object) {
  return (
    <h2
      className="uppercase text-white font-serif text-xl xl:text-2xl text-left text-balance mt-3 md:mt-8 mb-2"
      {...props}
    />
  );
}

function P(props: Object) {
  return (
    <p className="text-white font-sans text-sm xl:text-base mb-2" {...props} />
  );
}

function A(props: Object) {
  return (
    <a
      className="text-[#C2262E] hover:underline font-sans text-sm xl:text-base mb-2"
      {...props}
      target="_blank"
    />
  );
}

export {H1, H2, P, A};