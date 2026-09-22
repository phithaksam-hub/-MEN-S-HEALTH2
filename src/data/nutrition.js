export const nutritionOverview = {
  calories: { current: 1850, target: 2200, unit: 'kcal' },
  protein: { current: 92, target: 110, unit: 'g' },
  carbs: { current: 210, target: 260, unit: 'g' },
  fat: { current: 58, target: 75, unit: 'g' },
  water: { current: 1.8, target: 2.5, unit: 'L' },
}

export const initialMeals = [
  {
    id: 'meal-01',
    type: 'Breakfast',
    time: '07:30',
    name: 'Oatmeal with Banana & Egg Whites',
    calories: 420,
    protein: 28,
    carbs: 54,
    fat: 9,
  },
  {
    id: 'meal-02',
    type: 'Lunch',
    time: '12:30',
    name: 'Grilled Chicken Rice Bowl',
    calories: 610,
    protein: 42,
    carbs: 68,
    fat: 14,
  },
  {
    id: 'meal-03',
    type: 'Snack',
    time: '15:30',
    name: 'Greek Yogurt & Almonds',
    calories: 240,
    protein: 14,
    carbs: 18,
    fat: 11,
  },
  {
    id: 'meal-04',
    type: 'Dinner',
    time: '19:00',
    name: 'Salmon, Sweet Potato & Broccoli',
    calories: 580,
    protein: 38,
    carbs: 45,
    fat: 22,
  },
]

export const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack']

export const nutritionTips = [
  'Eat a variety of foods to cover a broad range of nutrients.',
  'Include a source of protein in every meal.',
  'Fill half your plate with fruits and vegetables.',
  'Drink enough water throughout the day.',
  'Avoid extreme dieting or skipping meals altogether.',
]
