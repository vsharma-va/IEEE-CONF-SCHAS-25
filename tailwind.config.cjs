/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'primary': '#a8c8ff',
                'on-primary': '#003061',
                'secondary': '#adc8f7',
                'on-secondary': '#133157',
                'surface': '#10131a',
                'on-surface': '#e0e2eb',
                'primary-container': '#0070d3',
                'on-primary-container': '#ffffff',
                'tertiary-container': '#9f4fbe',
                'on-tertiary-container': '#ffffff',
                'secondary-container': '#213d64',
                'on-secondary-container': '#b7d1ff',
            },
        },
    },
    plugins: []
};