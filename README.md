# AIInfo

AIInfo is a web-based resource designed to help organizations navigate the adoption of Generative AI. It provides tools and templates for creating corporate AI policies, brainstorming innovative GenAI use cases, and managing a list of potential AI projects.

## Features

The project is structured around a single HTML page (`index.html`) with three main sections:

1.  **Generic AI Policy:**
    *   Offers a comprehensive template for establishing corporate guidelines on AI usage.
    *   Covers essential aspects such as purpose, scope, guiding principles (innovation, human oversight, confidentiality, IP respect, ethical use, transparency), approved tools, prohibited uses, data privacy, intellectual property considerations, accuracy, human oversight requirements, security measures, training, policy review, and violations.
    *   Includes an acknowledgment section for employees.

2.  **GenAI Brainstorming Exercise:**
    *   Introduces the "Creative Matrix" methodology (adapted from Google Cloud Skills Boost) to facilitate brainstorming for GenAI applications.
    *   Provides an example scenario (Faux Floral Business) to illustrate how to use the matrix by intersecting business priorities with GenAI capabilities.

3.  **Usecase Ideas:**
    *   Displays a list of potential GenAI use case ideas loaded from the `ideas.json` file.
    *   Includes a form to submit new ideas. **Note:** This submission feature is for demonstration purposes only in the current static version. New ideas are added to the view dynamically but are not persisted back to the `ideas.json` file without a backend implementation.

## How to Use

1.  Clone or download the repository.
2.  Open the `index.html` file in a modern web browser.
3.  Navigate between the "Generic AI Policy," "GenAI Brainstorming Exercise," and "Usecase Ideas" tabs to explore the content.

As mentioned above, adding new ideas via the form in the "Usecase Ideas" tab will only update the current browser session. To permanently save new ideas, you would need to implement a backend service to handle writing to the `ideas.json` file or a database.

## Files

*   `index.html`: The main HTML file containing all content and functionality.
*   `ideas.json`: A JSON file storing sample GenAI use case ideas. It is loaded by the "Usecase Ideas" tab.
*   `README.md`: This file, providing an overview of the project.

## Potential Future Enhancements

*   **Backend Integration:** Implement a backend (e.g., using Node.js, Python/Flask, or a serverless function) to allow users to save new use case ideas submitted through the form, making the "Usecase Ideas" section fully functional.
*   **Styling Customization:** Allow for easier customization of the AI policy template.
*   **Export Options:** Add functionality to export the AI policy or the list of ideas.
