function UserFavoriteAnimals({ favoriteAnimals }) {
    return (
      <ul>
        {favoriteAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    );
  }
  
  export default UserFavoriteAnimals;