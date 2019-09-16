export enum EffortType {
  Bodyweight,
  Weight,
  Pace,
}

export enum ScalingType {
  Reps,
  Time,
}

export enum EquipmentType {
  None,
  Barbell,
  Dumbbell,
  Kettlebell,
  Machine,
}

export const Movements = [
  {
    name: 'Barbell bench press',
    equipmentType: EquipmentType.Barbell,
    effortType: EffortType.Weight,
    scalingType: ScalingType.Reps,
  },
  {
    name: 'Cable face pull',
    equipmentType: EquipmentType.Machine,
    effortType: EffortType.Weight,
    scalingType: ScalingType.Reps,
  },
  {
    name: 'Rear delt fly',
    equipmentType: EquipmentType.Machine,
    effortType: EffortType.Weight,
    scalingType: ScalingType.Reps,
  },
  {
    name: 'Seated dumbbell shoulder press',
    equipmentType: EquipmentType.Dumbbell,
    effortType: EffortType.Weight,
    scalingType: ScalingType.Reps,
  },
  {
    name: 'Incline bench row/ER/press',
    equipmentType: EquipmentType.Dumbbell,
    effortType: EffortType.Weight,
    scalingType: ScalingType.Reps,
  },
  {
    name: 'Dumbbell front raise',
    equipmentType: EquipmentType.Dumbbell,
    effortType: EffortType.Weight,
    scalingType: ScalingType.Reps,
  },
  {
    name: 'Dumbbell lateral raise',
    equipmentType: EquipmentType.Dumbbell,
    effortType: EffortType.Weight,
    scalingType: ScalingType.Reps,
  },
  {
    name: 'Decline dumbbell chest press',
    equipmentType: EquipmentType.Dumbbell,
    effortType: EffortType.Weight,
    scalingType: ScalingType.Reps,
  },
  {
    name: 'Decline push ups',
    equipmentType: EquipmentType.None,
    effortType: EffortType.Bodyweight,
    scalingType: ScalingType.Reps,
  },
  {
    name: 'Incline dumbbell chest press',
    equipmentType: EquipmentType.Dumbbell,
    effortType: EffortType.Weight,
    scalingType: ScalingType.Reps,
  },
  {
    name: 'Machine fly',
    equipmentType: EquipmentType.Machine,
    effortType: EffortType.Weight,
    scalingType: ScalingType.Reps,
  },
] as const

export type MovementNames = typeof Movements[number]['name']

export function getMovementByName(name: MovementNames) {
  return Movements.find(m => m.name === name)!
}

export type Week = {
  title: string
  days: {
    workouts: {
      sets: number
      restSeconds: number
      moves: {
        move: typeof Movements[number]
        reps: number
        weightLbs: number
      }[]
    }[]
  }[]
}

const week1: Week = {
  title: 'Bench Press Strength / Hypertrophy Shoulders & Triceps',
  days: [
    {
      workouts: [
        {
          sets: 3,
          restSeconds: 120,
          moves: [
            {
              move: getMovementByName('Barbell bench press'),
              weightLbs: 205,
              reps: 3,
            },
          ],
        },
        {
          sets: 3,
          restSeconds: 90,
          moves: [
            {
              move: getMovementByName('Cable face pull'),
              weightLbs: 75,
              reps: 10,
            },
            {
              move: getMovementByName('Rear delt fly'),
              weightLbs: 75,
              reps: 10,
            },
          ],
        },
        {
          sets: 3,
          restSeconds: 90,
          moves: [
            {
              move: getMovementByName('Seated dumbbell shoulder press'),
              weightLbs: 50,
              reps: 10,
            },
            {
              move: getMovementByName('Incline bench row/ER/press'),
              weightLbs: 50,
              reps: 10,
            },
          ],
        },
        {
          sets: 3,
          restSeconds: 90,
          moves: [
            {
              move: getMovementByName('Dumbbell front raise'),
              weightLbs: 10,
              reps: 10,
            },
            {
              move: getMovementByName('Dumbbell lateral raise'),
              weightLbs: 10,
              reps: 10,
            },
          ],
        },
        {
          sets: 3,
          restSeconds: 90,
          moves: [
            {
              move: getMovementByName('Decline dumbbell chest press'),
              weightLbs: 50,
              reps: 10,
            },
            {
              move: getMovementByName('Decline push ups'),
              weightLbs: 0,
              reps: 10,
            },
          ],
        },
        {
          sets: 3,
          restSeconds: 90,
          moves: [
            {
              move: getMovementByName('Incline dumbbell chest press'),
              weightLbs: 60,
              reps: 10,
            },
            {
              move: getMovementByName('Machine fly'),
              weightLbs: 60,
              reps: 10,
            },
          ],
        },
      ],
    },
  ],
}

export const AppData = {
  weeks: [week1, week1],
} as const

export default AppData
