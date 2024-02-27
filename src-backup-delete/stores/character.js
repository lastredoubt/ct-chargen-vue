import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import { CharacterDataCT } from '../assets/CharacterData/CharacterDataCT'


export const useCharacterStore = defineStore('character', () => {
  const pc = reactive(CharacterDataCT)

  return {pc}

})
