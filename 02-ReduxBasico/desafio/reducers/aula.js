const [COMPLETE_CLASS, COMPLETE_COURSE, RESET_COURSE] = [
  "aulas/COMPLETAR_AULA(id)",
  "aulas/COMPLETAR_CURSO",
  "aulas/RESETAR_CURSO",
];

export const completeClass = (payload) => ({ type: COMPLETE_CLASS, payload });
export const completeCourse = () => ({ type: COMPLETE_COURSE });
export const resetCourse = () => ({ type: RESET_COURSE });

const initialState = [
  {
    id: 1,
    name: "Design",
    completed: true,
  },
  {
    id: 2,
    name: "HTML",
    completed: false,
  },
  {
    id: 3,
    name: "CSS",
    completed: false,
  },
  {
    id: 4,
    name: "JavaScript",
    completed: false,
  },
];

const classReducer = immer.produce((draft, action) => {
  switch (action.type) {
    case COMPLETE_CLASS:
      const selectedClass = draft.find((c) => c.id === action.payload);
      if (selectedClass) selectedClass.completed = true;
      break;
    case COMPLETE_COURSE:
      draft.forEach((c) => {
        if (!c.completed) c.completed = true;
      });
      break;
    case RESET_COURSE: {
      draft.forEach((c) => {
        if (c.completed) c.completed = false;
      });
      break;
    }
  }
}, initialState);

export default classReducer;
