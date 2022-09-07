//Takes a non-negative integer (seconds) as input and return the time in a human-readable format (HH:MM:SS)
function humanReadable (input) {
    const hours=Math.floor(input/3600)
    const minutes=Math.floor((input-(hours*3600))/60)
    const seconds=input-hours*3600-minutes*60
    return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
  }
