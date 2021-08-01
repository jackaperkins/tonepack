import * as Tone from 'tone' 

import { coolFunction } from './otherModule' // just to test modules work at all
coolFunction() // it works!



// now some tone shit
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination()

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C3", "8n")