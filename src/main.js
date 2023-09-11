const structure = (todo) => `
<article class="todo">
  <figure class="todo--icon">
    <img
      src="./src/assets/images/icon-check.svg"
      class="todo--icon--image"
      alt="Check"
    />
  </figure>
  <p class="todo--description">${msg}</p>
  <figure class="todo--cross">
    <img
      src="./src/assets/images/icon-cross.svg"
      class="todo--cross--image"
      alt="Check"
    />
  </figure>
</article>
`;
