const { body } = require ('express-validator')

const registerValidation = [
  body('firstname')
    .trim()
    .notEmpty().withMessage('First name is required')
    .isAlpha().withMessage('First name must contain only letters')
    .escape(),

  body('lastname')
    .trim()
    .notEmpty().withMessage('Last name is required')
    .isAlpha().withMessage('Last name must contain only letters')
    .escape(),

  body('username')
    .trim()
    .notEmpty().withMessage('Username is required')
    .isLength({ min: 3 }).withMessage('Username must be at least 3 characters')
    .escape(),

  body('password')
    .trim()
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),

  body('confirmPassword')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    })
];

module.exports = registerValidation;