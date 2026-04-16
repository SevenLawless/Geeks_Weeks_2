const [brewCount, setBrewCount] = useState(0)

function handleBrewComplete() {
  setBrewCount(brewCount + 1)
}