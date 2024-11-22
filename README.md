Step 1: Set Up Firebase Account
Create a Firebase Project
![image](https://github.com/user-attachments/assets/2ecb87a9-e5d4-45de-8fa5-01408214016d)


Start by visiting the https://console.firebase.google.com/. You'll need to create a Google account if you don't already have one.

Once logged in, click "Add Project" to create a new Firebase project.

Follow the on-screen instructions to complete the project setup. This will serve as the backend for your authentication system.

Enable Authentication

![image](https://github.com/user-attachments/assets/04dff0ad-8bb1-4846-94b3-1f9c9bc172c2)

In the Firebase Console, navigate to the left sidebar, click on "Build," and then select "Authentication."

Click on "Get Started" to initialize the authentication module.

You'll see a list of sign-in methods. For this tutorial, we'll enable Google and Email/Password authentication. Toggle the switch to enable each method.

For Google sign-in, you'll need to provide a support email, typically your Firebase Google email.

Once you've configured your sign-in methods, click "Save" to apply the changes.

Set Up Your Application:

![image](https://github.com/user-attachments/assets/34314c19-6967-47de-b76d-77f62bab946e)

Head over to "Project Settings" in the Firebase Console.

Scroll to the "Your Apps" section and click "Web App."

Name your web app. If you plan to use Firebase Hosting, check the corresponding box.

Select your project and click "Register App." This will generate SDK settings that you'll need for your Next.js project.

Make sure to save these SDK settings securely, as they contain sensitive information.
