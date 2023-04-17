/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
    darkMode: 'class',

    content: [
        "./src/**/*.{html,js}",
        "./node_modules/flowbite/**/*.js"
    ],
    safelist: [
        'text-gray-50',
        'text-red-400',
        'text-red-500',
        'text-red-600',
        'text-green-400',
        'text-green-500'
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': 'iranyekan',
                'yekan-light': 'iran-yekan-light',
                'yekan-regular': 'iran-yekan-regular',
                'yekan-medium': 'iran-yekan-medium',
                'yekan-bold': 'iran-yekan-bold',
                'sans-light': 'iran-sans-light',
                'sans-regular': 'iran-sans-regular',
                'sans-medium': 'iran-sans-medium',
                'sans-bold': 'iran-sans-bold'
            },
            colors: {
                tealCustom: {
                    500 : '#bb931a'
                },
                zincCustom:{
                    900 : '#171A1F'
                },
                grayFooter:{
                    600:'#707a89'
                },
                grayCustom : {
                    100:'#f3f4f6',
                    200:'#e5e7eb',
                    300:'#d1d5db',
                    400:'#9ca3af',
                    500:'#6b7280',
                    600:'#4b5563',
                    700:'#374151',
                    800:'#1f2937',
                    900:'#111827'
                },
                redCustom : {
                    500:'#ef4444'
                },
                yellow: {
                    100: 'var(--text-yellow-100)',
                    400: 'var(--text-yellow-400)',
                    500: 'var(--text-yellow-500)',
                    600: 'var(--text-yellow-600)',
                    950: 'var(--text-yellow-950)'
                },
                red: {
                    400: 'var(--text-red-400)',
                    500: 'var(--text-red-500)',
                    600: 'var(--text-red-600)'
                },
                green: {
                    400: 'var(--text-green-400)',
                    500: 'var(--text-green-500)'
                },
                gray: {
                    50: 'var(--text-gray-50)',
                    100: 'var(--text-gray-100)',
                    200: 'var(--text-gray-200)',
                    300: 'var(--text-gray-300)',
                    400: 'var(--text-gray-400)',
                    500: 'var(--text-gray-500)',
                    600: 'var(--text-gray-600)',
                    700: 'var(--text-gray-700)',
                    800: 'var(--text-gray-800)',
                    900: 'var(--text-gray-900)',
                    950: 'var(--text-gray-950)'
                }
            },
            flex: {
                '2': '2 2 0%'
            },
            display: ['group-hover'],
            boxShadow: {
                'none': 'none !important'
            },
            fill: {
                green: {
                    500: 'var(--text-green-500)'
                },
                red: {
                    500: 'var(--text-red-500)'
                },
                yellow: {
                    400: 'var(--text-yellow-400)',
                    500: 'var(--text-yellow-500)',
                    600: 'var(--text-yellow-600)'
                },
                gray: {
                    400: 'var(--text-gray-400)'
                }
            },
            zIndex: {
                '100': 100,
                '1000': 1000,
                '1100': 1100,
                '1200': 1200,
                '9999': 9999
            },
            screens: {
                '2xs': '350px',
                'xs': '576px',
                'xmd' : '844px',
            }
        }
    },
    
    plugins: [
        require('flowbite/plugin')
    ],
    plugins: [
        require('tailwindcss-dark-mode')()
      ],
      // To enable dark mode for all classes:
      variants: ['dark', 'dark-hover', 'dark-group-hover',
       'dark-even', 'dark-odd'],
      
 };
