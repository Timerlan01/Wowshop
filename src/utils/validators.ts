export const productFormValidator = (field: string, inputValue: string | { [key: string]: string }) => {
  const validateFields = ['name', 'price', 'image', 'weight', 'brand', 'category', 'gender'];
  let value = '';

  if (!validateFields.includes(field)) {
    return null;
  }

  // Преобразование значения поля в строку
  if (typeof inputValue === 'string') {
    value = inputValue.trim();
  } else if (inputValue?.id) {
    value = inputValue.id.trim();
  }

  if (value.length === 0) {
    return {
      [field]: 'Поле не может быть пустым',
    };
  }

  // Проверка поля "image" на корректность ссылки
  if (field === 'image') {
    const regexp = /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif)|https?:\/\/.*(?:id=)[^&]+.*)$/;
    if (!regexp.test(value)) {
      return {
        [field]: 'Укажите действующую ссылку на изображение (например, с параметром id= или с расширением .png, .jpg, .jpeg, .webp или .gif)',
      };
    }
  }
  

  return null;
};

export const categoryFormValidator = (field: string, inputValue: string | { [key: string]: string }) => {
  const validateFields = ['name', 'url'];
  if (!validateFields.includes(field) || typeof inputValue !== 'string') {
    return null;
  }

  if (inputValue.trim().length === 0) {
    return {
      [field]: 'Поле не может быть пустым',
    };
  }

  if (field === 'url') {
    const regexp = /^[0-9A-Za-z-]+$/;
    if (!regexp.test(inputValue)) {
      return {
        [field]: 'URL может содержать только цифры, буквы и дефисы',
      };
    }
  }

  return null;
};

export const brandFormValidator = (field: string, inputValue: string | { [key: string]: string }) => {
  const validateFields = ['name', 'url'];
  if (!validateFields.includes(field) || typeof inputValue !== 'string') {
    return null;
  }

  if (inputValue.trim().length === 0) {
    return {
      [field]: 'Поле не может быть пустым',
    };
  }

  if (field === 'url') {
    const regexp = /^[0-9A-Za-z-]+$/;
    if (!regexp.test(inputValue)) {
      return {
        [field]: 'URL может содержать только цифры, буквы и дефисы',
      };
    }
  }

  return null;
};

export const cartFormValidator = (field: string, inputValue: string | { [key: string]: string }) => {
  const validateFields = ['name', 'phone', 'address'];
  if (!validateFields.includes(field) || typeof inputValue !== 'string') {
    return null;
  }

  if (inputValue.trim().length === 0) {
    return {
      [field]: 'Поле не может быть пустым',
    };
  }

  // Валидация поля "phone"
  if (field === 'phone') {
    const phoneRegexp = /^[0-9+\-\s()]+$/;
    if (!phoneRegexp.test(inputValue)) {
      return {
        [field]: 'Телефон может содержать только цифры, пробелы, дефисы и символы + ()',
      };
    }
  }

  return null;
};
