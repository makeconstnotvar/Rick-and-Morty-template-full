/*
  Загрузить список персонажей с сервера https://rickandmortyapi.com/api/character
  Вывести списком в столбик картоки с данными персонажей (бекграунд #3c3e44)
  Сделать пейджер, который листает список персонажей
  Сделать фильтр, который позволяет искать персонажа по имени, статусу, разновидности, полу, типу
  Вывести логотип в header
*/

/*
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
*/

/*
status: [Alive, Dead, Unknown]
species: [Human, Alien, Humanoid, Animal, Robot, Poopybutthole, Mythological Creature, Cronenberg, Disease, unknown]
gender:[male, female, genderless, unknown]
*/

export default function App() {

  return (
    <main>
      <header />
      <div className='cards'>
        <div className='cards-title'>Персонажи</div>
        <div className='cards-filter'>Фильтр персонажей</div>
        <div className='cards-box'>Список персонажей</div>
        <div className='pages'>Пейджер</div>
      </div>
    </main>
  )
}
