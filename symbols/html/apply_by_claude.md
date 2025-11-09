<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Started Today</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            overflow: hidden;
        }

        .container {
            text-align: center;
            padding: 40px;
            max-width: 900px;
            animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        h1 {
            color: white;
            font-size: 3.5em;
            margin-bottom: 30px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            animation: slideInLeft 1s ease-out 0.3s both;
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .action-items {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 40px 0;
        }

        .action-card {
            background: white;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: popIn 0.6s ease-out both;
        }

        .action-card:nth-child(1) {
            animation-delay: 0.5s;
        }

        .action-card:nth-child(2) {
            animation-delay: 0.7s;
        }

        @keyframes popIn {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        .action-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        .emoji {
            font-size: 4em;
            margin-bottom: 15px;
            display: block;
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }

        .action-card h2 {
            color: #667eea;
            font-size: 1.8em;
            margin-bottom: 15px;
        }

        .action-card p {
            color: #555;
            font-size: 1.1em;
            line-height: 1.6;
        }

        .cta-section {
            margin-top: 50px;
            animation: fadeIn 1s ease-out 1.2s both;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .cta-button {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 20px 50px;
            font-size: 1.5em;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 10px 25px rgba(245, 87, 108, 0.4);
            transition: all 0.3s ease;
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 1px;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 10px 25px rgba(245, 87, 108, 0.4);
            }
            50% {
                box-shadow: 0 10px 35px rgba(245, 87, 108, 0.6);
            }
        }

        .cta-button:hover {
            transform: scale(1.05);
            box-shadow: 0 15px 35px rgba(245, 87, 108, 0.6);
        }

        .footer-text {
            color: white;
            font-size: 1.3em;
            margin-top: 30px;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
            animation: fadeIn 1s ease-out 1.5s both;
        }

        .highlight {
            color: #ffd700;
            font-weight: bold;
            animation: glow 1.5s ease-in-out infinite;
        }

        @keyframes glow {
            0%, 100% {
                text-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700;
            }
            50% {
                text-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700;
            }
        }

        /* Floating particles background */
        .particle {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0.6;
            animation: float 6s infinite;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-20px) translateX(10px);
            }
            50% {
                transform: translateY(-40px) translateX(-10px);
            }
            75% {
                transform: translateY(-20px) translateX(10px);
            }
        }

        .particle:nth-child(1) { width: 10px; height: 10px; top: 20%; left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { width: 15px; height: 15px; top: 60%; left: 80%; animation-delay: 1s; }
        .particle:nth-child(3) { width: 8px; height: 8px; top: 40%; left: 90%; animation-delay: 2s; }
        .particle:nth-child(4) { width: 12px; height: 12px; top: 80%; left: 15%; animation-delay: 1.5s; }
        .particle:nth-child(5) { width: 10px; height: 10px; top: 15%; left: 70%; animation-delay: 0.5s; }
    </style>
</head>
<body>
    <!-- Floating particles -->
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>

    <div class="container">
        <h1>🚀 Get Started Today!</h1>
        
        <div class="action-items">
            <div class="action-card">
                <span class="emoji">📝</span>
                <h2>Step 1</h2>
                <p>Convert your CV to markdown in ChatGPT</p>
            </div>
            
            <div class="action-card">
                <span class="emoji">🎯</span>
                <h2>Step 2</h2>
                <p>Generate 5 tailored versions for different roles</p>
            </div>
        </div>

        <div class="cta-section">
            <button class="cta-button">Subscribe Now</button>
            <p class="footer-text">
                Get the <span class="highlight">FREE Template</span> + IT Contractor Course in Description!
            </p>
        </div>
    </div>
</body>
</html>
