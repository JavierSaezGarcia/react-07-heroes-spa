

export const types = {
    login:  '[Auth] Login',
    logout: '[Auth] Logout'
}

/******************************************************************** explicacion **********************
En JavaScript, los "types" se utilizan comúnmente en el desarrollo de aplicaciones utilizando el patrón de arquitectura Flux o Redux. 
Estos tipos, también conocidos como "action types" o "action constants", son constantes que representan las acciones que pueden ocurrir 
en una aplicación. Estas acciones son generalmente desencadenadas por el usuario o por eventos internos y se utilizan para comunicar 
cambios en el estado de la aplicación.

En este ejemplo los "types" se definen utilizando una constante llamada types. Es un objeto que contiene dos propiedades: login y logout. 
Estas propiedades son cadenas de texto que describen las acciones específicas relacionadas con la autenticación de un usuario.
La convención utilizada en este ejemplo es [Auth] Login y [Auth] Logout. 
Esta convención es comúnmente utilizada para proporcionar un contexto adicional a las acciones. 
El texto [Auth] se utiliza para indicar que estas acciones están relacionadas con la autenticación de usuario. 
Esto puede ser útil en aplicaciones más grandes para organizar y clasificar las acciones de acuerdo a su funcionalidad.

Cuando se realiza una acción en la aplicación, por ejemplo, cuando un usuario inicia sesión, se crea un objeto de acción 
que contiene un campo type que se corresponde con el tipo de acción. Por ejemplo:

*/
const loginAction = {
  type: types.login,
  payload: {
    // datos adicionales, como nombre de usuario y contraseña
  }
};
/*
Aquí, types.login se utiliza para asignar el tipo de acción "login" al objeto de acción. 
Este objeto de acción luego se envía a un "reducer" (reductor), que es una función que 
toma el estado actual de la aplicación y la acción, y devuelve un nuevo estado actualizado en base a la acción.

En resumen, los "types" son constantes utilizadas para representar acciones específicas en una aplicación. 
Proporcionan un mecanismo para identificar y manejar diferentes tipos de acciones de manera consistente en todo el código de la aplicación.

*/