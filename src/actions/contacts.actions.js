export const types = Object.freeze({
  CONTACT_CLICKED: 'contacts/CONTACT_CLICKED',
});

export const contactClicked = (id) => ({
  type: types.CONTACT_CLICKED,
  payload: {
    id
  },
})