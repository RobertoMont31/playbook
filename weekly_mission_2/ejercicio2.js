const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

  console.log("Lista de Nombres de todos los Explorers:")
  explorers.forEach(explorer => console.log(explorer.name))

  console.log("Lista de Stack de cada explorer:")
  explorers.forEach((explorer) =>  console.log(explorer.name+": "+explorer.stack))

  console.log("Lista de todos los Stacks:")
  const listaStack = explorers.map(function(explorer){return explorer.stack})
  console.log(listaStack)

  console.log("Lista de explorers con stack JS:")
  const explorersJS = explorers.filter((explorers) => explorers.stack.includes('js'))
  explorersJS.forEach((explorer) => console.log(explorer.name))

  console.log("Explorer que pertenece a la CDMX")
  console.log(explorers.find((city) => city = "CDMX").name)


  const ejercicioscompletados = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
  console.log("Ejercicios Completados: " + ejercicioscompletados)

  const AlguienTermino = explorers.some((B) => B.missions.frontend.exercisesFinished === true)
  console.log("Al menos uno de los explorers ya termino lo ejercicios? :"+AlguienTermino)

  const TodosTerminaron = explorers.every((B) => B.missions.onboarding.isFinished === true)
  console.log("Todos los explorers terminaron el Onboarding? :"+TodosTerminaron)