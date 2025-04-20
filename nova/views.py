from django.shortcuts import render

from django.shortcuts import render
from .models import GalleryImage

def home(request):
    context = {
        'title': 'Novfeed - Sustainable Biotechnology Solutions',
        'page': 'home',
        
        # Our Values
        'values': [
            {
                'title': 'Pioneering Spirit',
                'description': 'Let\'s lead the way',
                'icon': 'fas fa-rocket'
            },
            {
                'title': 'Dream Big',
                'description': 'We can do it',
                'icon': 'fas fa-lightbulb'
            },
            {
                'title': 'Accountability',
                'description': 'Strive for excellence, for collective performance',
                'icon': 'fas fa-check-circle'
            },
            {
                'title': 'Agile & Rapid',
                'description': 'The time is now',
                'icon': 'fas fa-bolt'
            },
            {
                'title': 'Collaboration',
                'description': 'Together we go further and faster',
                'icon': 'fas fa-users'
            },
            {
                'title': 'Respect',
                'description': 'Valuing every individual and perspective',
                'icon': 'fas fa-heart'
            }
        ],
        
        # Hero Carousel Images
        'hero_images': [
            {
                'image': 'images/8.jpg',
                'title': 'Sustainable Biotechnology',
                'subtitle': 'Transforming Waste into Valuable Resources'
            },
            {
                'image': 'images/9.jpg',
                'title': 'Innovative Protein Solutions',
                'subtitle': 'Revolutionizing Aquaculture and Agriculture'
            },
            {
                'image': 'images/7.jpg',
                'title': 'Eco-Friendly Fertilizers',
                'subtitle': 'Nurturing Agriculture, Protecting the Planet'
            }
        ],
        
        # About Section
        'about': {
            'description': 'Novfeed is a registered biotech company that was incorporated in 2020. We have developed an innovative biotechnological platform that transforms organic waste into valuable alternatives for protein ingredients and bio-fertilizers. Utilizing natural microbes and advanced industrial biotech processes, Novfeed converts organic waste into highly concentrated protein products and nutrient-rich bio-fertilizers. We focus on creating nutritious, customizable inputs for the food system, thereby supporting the aquaculture and agriculture sectors in producing high-quality food products. Our solutions promote sustainable agricultural practices while enhancing food security and productivity.',
            'mission': 'Novfeed is creating natural, sustainable, and traceable protein ingredients and biofertilizers that enhance the food system for animals and crops.',
            'vision': 'Novfeed aims to become the global leader in innovative, sustainable protein and biofertilizer solutions, driving a healthier and more resilient world'
        }
    }
    return render(request, 'home.html', context)

def about(request):
    # Rendering the about template with context data
    context = {
        'title': 'About Us',
        'page': 'about',
        # Flat team members list without expertise grouping
        'team_members': [
            # Former Leadership
            {
                'name': 'Diana Orembe',
                'position': 'Founder & CEO',
                'bio': 'Microbiologist (Hons) driving Novfeed\'s scientific and strategic initiatives.',
                'image': 'images/diana.jpeg',
                'linkedin': 'https://www.linkedin.com/'
            },
            {
                'name': 'Otaigo Elisha',
                'position': 'Founder & COO',
                'bio': 'Natural Resources and Environmental Economist (Hons) managing our operational strategy.',
                'image': 'images/otaigo.jpg',
                'linkedin': 'https://www.linkedin.com/'
            },
            # Former Research & Development
            {
                'name': 'Innocent Lymo',
                'position': 'Research & Development Specialist',
                'bio': 'Aquaculture scientist focused on innovative solutions in sustainable food systems.',
                'image': 'images/lyimo.jpg',
                'linkedin': 'https://www.linkedin.com/'
            },
            # Former Advisory Board
            {
                'name': 'Dr. Gregory Yovanof',
                'position': 'Advisor',
                'bio': 'Professor of Innovation & Entrepreneurship at the American College of Greece - DEREE Graduate School.',
                'image': 'images/yovanof.jpg',
                'linkedin': 'https://www.linkedin.com/'
            },
            {
                'name': 'Prof. Anthony Mshandete',
                'position': 'Advisor',
                'bio': 'Professor of Biotechnology and Deputy Vice Chancellor, Academic, Research and Innovation at NM-AIST.',
                'image': 'images/mashandete.jpg',
                'linkedin': 'https://www.linkedin.com/'
            },
            {
                'name': 'Ally Mahadhy, Ph.D',
                'position': 'Advisor',
                'bio': 'Tanzanian Bioengineer and Biotech Scientist.',
                'image': 'images/mahadhy.png',
                'linkedin': 'https://www.linkedin.com/'
            },
            # Former External Consulting
            {
                'name': 'David Medina Cruz, Ph.D',
                'position': 'Consultant',
                'bio': 'Scientist and entrepreneur in biotech and cleantech based in Boston, United States.',
                'image': 'images/david.jpg',
                'linkedin': 'https://www.linkedin.com/'
            }
        ],
        # Vision and Mission data
        'vision_mission': {
            'vision': 'To create a future where waste is a resource, aquaculture thrives on sustainable protein, and agriculture flourishes with organic solutions, ensuring a healthier planet and food-secure communities.',
            'mission': 'Novfeed is revolutionizing food systems by converting food waste into sustainable, high-quality protein for aquaculture and organic fertilizer, driving food security, environmental sustainability, and agricultural innovation.'
        },
        # Story Behind Novfeed
        'story': {
            'founding': (
                'Novfeed was founded in 2020 by Mr. Otaigo and Ms. Diana with a bold vision: to transform food waste into '
                'sustainable solutions for aquaculture and agriculture. Inspired by the principles of the circular economy, '
                'we developed a groundbreaking biotechnology that converts organic waste into high-quality protein for aquaculture '
                'and organic fertilizer for farming. Our journey began with a simple question: How can we address the dual challenges '
                'of food waste and unsustainable food production? Today, we\'re proud to offer a solution that not only reduces waste '
                'but also supports food security, environmental sustainability, and economic empowerment. From our first pilot project '
                'to partnerships with aquaculture farms, every milestone has brought us closer to our goal of creating a world where '
                'waste is a resource, and food systems are sustainable. Join us as we continue to innovate and inspire change for a healthier planet.'
            ),
            'problem': (
                'Today, over 1.3 billion tons of food is wasted annually, while global demand for protein continues to rise. '
                'Traditional aquaculture relies heavily on wild-caught fish and unsustainable feed sources, putting immense pressure '
                'on our oceans and ecosystems. Novfeed was founded to tackle these interconnected issues by transforming food waste '
                'into valuable resources, ensuring a sustainable future for food production.'
            ),
            'science': (
                'At the heart of Novfeed is our groundbreaking biotechnology. Using advanced microbial processes, we convert organic '
                'waste into nutrient-rich protein for aquaculture and organic fertilizer for agriculture. This innovative approach '
                'not only reduces waste but also provides a sustainable alternative to traditional feed and fertilizers, creating a '
                'closed-loop system that benefits both people and the planet.'
            )
        },
        # Technology and Innovation
        'technology': {
            'core': (
                'At Novfeed, we\'re redefining sustainability with our proprietary biotechnology that transforms organic waste into '
                'high-quality protein for aquaculture and organic fertilizer for agriculture. Our innovative process uses microbial '
                'fermentation to break down food waste, creating a closed-loop system that benefits both the environment and the economy.'
            ),
            'process': [
                {
                    'step': 'Waste Collection', 
                    'description': 'We source organic waste from market places (food processing plants, agricultural residues, or urban waste streams.)'
                },
                {
                    'step': 'Microbial Fermentation', 
                    'description': 'Using specially engineered microorganisms, we break down the waste into its core nutrients.'
                },
                {
                    'step': 'Product Creation', 
                    'description': 'The nutrients are then processed into high-quality protein for aquaculture feed and organic fertilizer for farming, ensuring zero waste and maximum efficiency.'
                }
            ],
            'benefits': {
                'aquaculture': [
                    'Provides a sustainable, cost-effective alternative to traditional fishmeal.',
                    'Improves fish health and growth rates due to high nutrient content.',
                    'Reduces reliance on wild-caught fish, preserving marine ecosystems.'
                ],
                'agriculture': [
                    'Offers an organic fertilizer that enhances soil health and crop yields.',
                    'Reduces the need for chemical fertilizers, promoting sustainable farming practices.'
                ],
                'environment': [
                    'Diverts organic waste from landfills, reducing greenhouse gas emissions.',
                    'Supports a circular economy by turning waste into valuable resources.',
                    'Lowers the carbon footprint of food production systems.'
                ]
            },
            'uniqueness': [
                'Is Scalable: Can be adapted to different regions and waste streams.',
                'Is Sustainable: Creates zero waste and reduces environmental impact.',
                'Is Efficient: Produces high-quality products at a lower cost than conventional alternatives.'
            ]
        },
        # Social Impact and Sustainability
        'sustainability': {
            'commitment': (
                'At Novfeed, sustainability is at the core of everything we do. We are committed to creating a positive impact '
                'on the environment and society by transforming food waste into valuable resources. Our work aligns with global '
                'sustainability goals, ensuring that we contribute to a healthier planet and more equitable food systems.'
            ),
            'practices': [
                'Waste Reduction: By converting organic waste into protein and fertilizer, we divert tons of waste from landfills, reducing greenhouse gas emissions and pollution.',
                'Resource Efficiency: Our closed-loop system ensures that every input is used to its fullest potential, minimizing waste and maximizing value.',
                'Sustainable Food Production: We provide aquaculture and agriculture with sustainable alternatives to traditional feed and fertilizers, reducing reliance on finite resources.'
            ],
            'sdgs': [
                {
                    'goal': 'SDG 2: Zero Hunger', 
                    'description': 'By providing sustainable protein for aquaculture, we help ensure food security for growing populations.'
                },
                {
                    'goal': 'SDG 12: Responsible Consumption and Production', 
                    'description': 'Our waste-to-resource model promotes a circular economy and reduces environmental impact.'
                },
                {
                    'goal': 'SDG 13: Climate Action', 
                    'description': 'By diverting waste from landfills and reducing reliance on unsustainable resources, we lower greenhouse gas emissions.'
                },
                {
                    'goal': 'SDG 14: Life Below Water', 
                    'description': 'Our sustainable aquaculture feed reduces pressure on marine ecosystems and supports healthier oceans.'
                }
            ],
            'impact_stories': [
                {
                    'title': 'Fish Farming Success', 
                    'description': 'John a fish farmer in Ukerewe saw a 30% increase in yield after switching to Novfeed\'s sustainable protein feed.'
                },
                {
                    'title': 'Crop Yield Improvement', 
                    'description': 'Paddy and Sunflower farmer in Igunga and Manyoni Region increased there yield by 40% and improved soil health using Novfeed\'s organic fertilizer.'
                }
            ]
        },
        # Timeline data
        'timeline': [
            {
                'year': '2020',
                'title': 'The Beginning',
                'description': 'Novfeed was founded in Dar es Salaam, Tanzania, with a vision to transform organic waste into valuable resources.'
            },
            {
                'year': '2021',
                'title': 'First Breakthrough',
                'description': 'We developed our proprietary microbial fermentation process, creating high-quality protein from food waste.'
            },
            {
                'year': '2022',
                'title': 'Market Expansion',
                'description': 'Novfeed expanded operations to Kenya and Uganda, partnering with local fish farms and agricultural businesses.'
            },
            {
                'year': '2023',
                'title': 'Product Diversification',
                'description': 'Launched our organic bio-fertilizer line, providing sustainable solutions for crop farmers across East Africa.'
            },
            {
                'year': '2024',
                'title': 'Research Partnership',
                'description': 'Established research partnerships with universities and agricultural institutions to further innovate our biotechnology solutions.'
            }
        ],
        # Partners data
        'partners': [
            {
                'name': 'EcoFish Farms',
                'type': 'Aquaculture Partner'
            },
            {
                'name': 'GreenGrow Solutions',
                'type': 'Agricultural Partner'
            },
            {
                'name': 'BioTech Research Institute',
                'type': 'Research Partner'
            },
            {
                'name': 'East African Farmers Association',
                'type': 'Community Partner'
            },
            {
                'name': 'Sustainable Future Initiative',
                'type': 'Environmental Partner'
            },
            {
                'name': 'AgriInnovate Tanzania',
                'type': 'Innovation Partner'
            },
            {
                'name': 'Food Security Alliance',
                'type': 'Strategic Partner'
            },
            {
                'name': 'CleanTech Ventures',
                'type': 'Investment Partner'
            }
        ],
        # Awards data
        'awards': [
            {
                'title': 'Sustainability Excellence Award',
                'organization': 'World Aquaculture Society',
                'year': '2024',
                'description': 'Recognized for outstanding contribution to sustainable aquaculture practices.',
                'image': 'images/award1.jpg',
            },
            {
                'title': 'Innovation in Feed Technology',
                'organization': 'African Aquaculture Association',
                'year': '2023',
                'description': 'Awarded for groundbreaking insect-based feed solutions.',
                'image': 'images/award2.webp',
            },
            {
                'title': 'Best Startup in Agriculture',
                'organization': 'East African Business Council',
                'year': '2023',
                'description': 'Recognized as a leading agricultural innovation company in East Africa.',
                'image': 'images/award3.jpg',
            },
            {
                'title': 'Environmental Impact Award',
                'organization': 'Global Sustainability Forum',
                'year': '2022',
                'description': 'Honored for significant contributions to reducing environmental footprints in fish farming.',
                'image': 'images/award4.jpg',
            },
        ]
    }
    return render(request, 'about.html', context)
def contact(request):
    # Rendering the contact template with context data
    context = {
        'title': 'Contact Us',
        'page': 'contact',
        # Office locations
        'offices': [
            {
                'name': 'Headquarters',
                'address': 'Plot 123, Msasani Peninsula, Dar es Salaam, Tanzania',
                'phone': '+255 123 456 789',
                'email': 'info@Novfeed.com',
                'hours': 'Monday - Friday: 8:00 AM - 5:00 PM'
            },
            {
                'name': 'Research & Development Center',
                'address': 'Industrial Area, Block B, Arusha, Tanzania',
                'phone': '+255 987 654 321',
                'email': 'research@Novfeed.com',
                'hours': 'Monday - Friday: 8:00 AM - 5:00 PM'
            },
            {
                'name': 'Production Facility',
                'address': 'Igunga Industrial Zone, Tabora, Tanzania',
                'phone': '+255 456 789 123',
                'email': 'production@Novfeed.com',
                'hours': 'Monday - Saturday: 7:00 AM - 6:00 PM'
            }
        ],
        # FAQ items
        'faqs': [
            {
                'question': 'How can I purchase Novfeed products?',
                'answer': 'You can place an order through our website, contact our sales team via phone or email, or visit one of our distribution partners.'
            },
            {
                'question': 'Do you offer product samples?',
                'answer': 'Yes, we offer samples to new clients. Please contact our sales team to request samples of our aquaculture feed or bio-fertilizers.'
            },
            {
                'question': 'What regions do you currently serve?',
                'answer': 'We currently serve Tanzania and neighboring East African countries. We\'re continuously expanding our reach to new regions.'
            },
            {
                'question': 'How can I become a distribution partner?',
                'answer': 'We welcome new distribution partners. Please reach out to our business development team at partnerships@Novfeed.com to discuss opportunities.'
            },
            {
                'question': 'Do you provide technical support for your products?',
                'answer': 'Yes, our technical team provides comprehensive support for product application, troubleshooting, and optimization to ensure the best results for our clients.'
            }
        ]
    }
    
    # Processing form submission (simplified example)
    if request.method == 'POST':
        # In a real application, you would validate the form data
        # and perhaps send an email or save to the database
        context['form_submitted'] = True
        context['message'] = 'Thank you for your message! We will get back to you soon.'
    
    return render(request, 'contact.html', context)


from django.shortcuts import render

from django.shortcuts import render

def team(request):
    context = {
        'title': 'Meet Our Team',
        'page': 'team',
        'intro_text': 'At Novfeed, our diverse team of experts works together to transform organic waste into sustainable solutions for agriculture and aquaculture. Each member brings unique skills and perspectives that drive our innovation and impact.',
        
        # Featured team section - spotlight format
        'featured_member': {
            'name': 'Diana Orembe',
            'position': 'Founder & CEO',
            'bio': 'A microbiologist with honors, Diana brings deep scientific expertise to lead Novfeed\'s strategic vision and technological innovation.',
            'image': 'images/diana.jpeg',
            'linkedin': 'https://www.linkedin.com/',
            'quote': 'Innovation in biotechnology is key to solving our most pressing environmental challenges.'
        },
        
        # Expertise areas with team members
        'expertise_areas': [
            {
                'name': 'Leadership',
                'icon': 'fa-users',
                'color': '#00c9a7',
                'description': 'Guiding our vision and strategic direction',
                'members': [
                    {
                        'name': 'Diana Orembe',
                        'position': 'Founder & CEO',
                        'bio': 'Microbiologist (Hons) driving Novfeed\'s scientific and strategic initiatives.',
                        'image': 'images/diana.jpeg',
                        'linkedin': 'https://www.linkedin.com/'
                    },
                    {
                        'name': 'Otaigo Elisha',
                        'position': 'Founder & COO',
                        'bio': 'Natural Resources and Environmental Economist (Hons) managing our operational strategy.',
                        'image': 'images/otaigo.jpg',
                        'linkedin': 'https://www.linkedin.com/'
                    }
                ]
            },
            {
                'name': 'Research & Development',
                'icon': 'fa-flask-vial',
                'color': '#0095ff',
                'description': 'Driving scientific innovation and discovery',
                'members': [
                    {
                        'name': 'Innocent Lymo',
                        'position': 'Research & Development Specialist',
                        'bio': 'Aquaculture scientist focused on innovative solutions in sustainable food systems.',
                        'image': 'images/lyimo.jpg',
                        'linkedin': 'https://www.linkedin.com/'
                    }
                ]
            },
            {
                'name': 'Advisory Board',
                'icon': 'fa-chart-line',
                'color': '#845ef7',
                'description': 'Expert guidance and strategic insights',
                'members': [
                    {
                        'name': 'Dr. Gregory Yovanof',
                        'position': 'Advisor',
                        'bio': 'Professor of Innovation & Entrepreneurship at the American College of Greece - DEREE Graduate School.',
                        'image': 'images/yovanof.jpg',
                        'linkedin': 'https://www.linkedin.com/'
                    },
                    {
                        'name': 'Prof. Anthony Mshandete',
                        'position': 'Advisor',
                        'bio': 'Professor of Biotechnology and Deputy Vice Chancellor, Academic, Research and Innovation at NM-AIST.',
                        'image': 'images/mashandete.jpg',
                        'linkedin': 'https://www.linkedin.com/'
                    },
                    {
                        'name': 'Ally Mahadhy, Ph.D',
                        'position': 'Advisor',
                        'bio': 'Tanzanian Bioengineer and Biotech Scientist.',
                        'image': 'images/mahadhy.png',
                        'linkedin': 'https://www.linkedin.com/'
                    }
                ]
            },
            {
                'name': 'External Consulting',
                'icon': 'fa-globe',
                'color': '#ffa600',
                'description': 'Global expertise and scientific consulting',
                'members': [
                    {
                        'name': 'David Medina Cruz, Ph.D',
                        'position': 'Consultant',
                        'bio': 'Scientist and entrepreneur in biotech and cleantech based in Boston, United States.',
                        'image': 'images/david.jpg',
                        'linkedin': 'https://www.linkedin.com/'
                    }
                ]
            }
        ],
        
        # Team collaboration insights
        'collaboration_text': 'Our team brings together diverse expertise from biotechnology, economics, aquaculture, and innovation to create integrated sustainable solutions that address complex environmental challenges.',
        
        # Testimonials from team members about working at Novfeed
        'team_testimonials': [
            {
                'quote': 'At Novfeed, we\'re not just developing technologies; we\'re creating sustainable solutions that can transform our approach to waste and agriculture.',
                'name': 'Diana Orembe',
                'position': 'Founder & CEO'
            },
            {
                'quote': 'Our multidisciplinary approach allows us to tackle environmental challenges with innovative, science-driven solutions.',
                'name': 'Otaigo Elisha',
                'position': 'Founder & COO'
            }
        ]
    }
    return render(request, 'team.html', context)


from django.shortcuts import render

from django.shortcuts import render, get_object_or_404
from .models import GalleryImage

def gallery(request):
    """
    Display gallery images
    """
    images = GalleryImage.objects.all()
    
    # Optional: Add any filtering or featured image logic
    featured_images = images.filter(is_featured=True)[:5]  # Assumes you add is_featured field
    
    context = {
        'images': images,
        'featured_images': featured_images,
    }
    
    return render(request, 'gallery.html', context)

def gallery_image_detail(request, image_slug):
    """
    Display a single gallery image with details
    """
    image = get_object_or_404(GalleryImage, slug=image_slug)
    
    # Get next and previous images
    next_image = GalleryImage.objects.filter(
        order__gt=image.order
    ).order_by('order', 'created').first()
    
    previous_image = GalleryImage.objects.filter(
        order__lt=image.order
    ).order_by('-order', '-created').first()
    
    # If no image with higher/lower order, wrap around
    if not next_image:
        next_image = GalleryImage.objects.exclude(id=image.id).order_by('order', 'created').first()
    
    if not previous_image:
        previous_image = GalleryImage.objects.exclude(id=image.id).order_by('-order', '-created').first()
    
    # Get related images
    related_images = GalleryImage.objects.exclude(id=image.id)[:8]
    
    context = {
        'image': image,
        'next_image': next_image,
        'previous_image': previous_image,
        'related_images': related_images,
    }
    
    return render(request, 'gallery_detail.html', context)

from django.shortcuts import render

def products(request):
    # Rendering the completely redesigned products template with context data
    context = {
        'title': 'Novfeed Solutions',
        'page': 'products',
        
        # Main service categories with new structure
        'services': [
            {
                'id': 'feasibility',
                'name': 'Feasibility Studies',
                'icon': 'fas fa-chart-line',
                'description': 'We perform comprehensive feasibility studies for the establishment of proposed fish farming aquaculture projects.',
                'color': 'blue',
                'image': 'images/11.jpg',
                'details': 'Our expert team analyzes market conditions, environmental factors, and financial projections to determine the viability of your aquaculture project. We provide detailed reports with actionable insights to help you make informed decisions.'
            },
            {
                'id': 'technology',
                'name': 'Technology Transfer',
                'icon': 'fas fa-exchange-alt',
                'description': 'Novfeed leverages global partnerships and expertise to transfer technology that maximizes fish farmers\' production efficiency.',
                'color': 'green',
                'image': 'images/10.jpg',
                'details': 'We connect you with cutting-edge aquaculture technologies from around the world, customized for local conditions. Our technology transfer program includes training, implementation support, and ongoing optimization.'
            },
            {
                'id': 'consulting',
                'name': 'On-site Consulting',
                'icon': 'fas fa-users-cog',
                'description': 'We provide on-site consulting and routinely follow project operations with technical inspections to ensure maximum efficiency.',
                'color': 'teal',
                'image': 'images/9.jpg',
                'details': 'Novfeed experts conduct periodic visits to your fish farm, ensuring that your project operates at maximum efficiency. We identify optimization opportunities, troubleshoot issues, and implement best practices tailored to your specific operation.'
            },
            {
                'id': 'data',
                'name': 'Data-Driven Farming',
                'icon': 'fas fa-database',
                'description': 'We collect and analyze farm data to advise farmers on best practices that will improve their yield and efficiency.',
                'color': 'purple',
                'image': 'images/7.jpg',
                'details': 'Our data collection and analysis platform provides actionable insights to optimize feed usage, water quality, stocking density, and harvest timing. Data-driven decisions lead to improved profitability and sustainable operations.'
            }
        ],
        
        # Flagship products with enhanced structure from the product document
        'flagship_products': [
            {
                'id': 'Novfeed-protein',
                'name': 'Novfeed',
                'tagline': 'Sustainable Protein Source for Aquaculture',
                'description': 'A high-protein, eco-friendly feed designed to optimize fish growth while reducing reliance on wild-caught fishmeal. Ideal for sustainable aquaculture practices.',
                'process': 'Made from upcycled organic waste through our proprietary biotechnology platform using microbial fermentation.',
                'image': 'images/2.jpg',
                'cta': 'Enquire Now',
                'benefits': [
                    'Improves fish growth and health',
                    'Reduces feed costs by up to 30%',
                    'Promotes sustainable aquaculture practices',
                    'Increases fish growth rate by 25%',
                    'Reduces environmental waste by 50%',
                    'Complete protein source with 70% crude protein',
                    '97% fish survival rate',
                    'Very stable dry product with a long shelf life',
                    'Highly digestible and palatable',
                    'Improves gut health',
                    'Low FCR'
                ],
                'variants': [
                    {
                        'name': 'Novfeed Starter Feed',
                        'description': 'For fry & fingerlings (0-10g): High-protein feed (35-40%) in crumbled or pellet form.'
                    },
                    {
                        'name': 'Novfeed Grower Feed',
                        'description': 'For juveniles (10-200g): Medium-protein feed (30-35%), gradually increasing pellet size.'
                    },
                    {
                        'name': 'Novfeed Finisher Feed',
                        'description': 'For adults (>200g): Lower-protein feed (25-30%) to support growth before harvest.'
                    }
                ],
                'usage_instructions': [
                    {
                        'step': 'Choose the Right Feed',
                        'details': 'Select from Starter, Grower, or Finisher Feed based on fish size and stage.'
                    },
                    {
                        'step': 'Feeding Frequency',
                        'details': 'Fry & Fingerlings: 4-6 times a day, Juveniles: 3-4 times a day, Adults: 2-3 times a day.'
                    },
                    {
                        'step': 'Feeding Rate',
                        'details': 'Typically 3-5% of body weight per day. Adjust based on growth, appetite, and water conditions.'
                    },
                    {
                        'step': 'Feeding Method',
                        'details': 'Use broadcast feeding, fixed point feeding, or automatic feeders depending on farm size.'
                    },
                    {
                        'step': 'Monitor Feeding Behavior',
                        'details': 'If fish leave uneaten feed, reduce the amount. Avoid overfeeding to prevent water pollution.'
                    }
                ]
            },
            {
                'id': 'ecovita',
                'name': 'EcoVita',
                'tagline': 'Premium Organic Soil Conditioner',
                'description': 'An organic fertilizer made from upcycled organic waste, designed to enrich soil health and boost crop yields sustainably.',
                'process': 'EcoVita has proved to increase yield and health of vegetable and fruits tree, have bio-stimulant property, facilitate plant nutrient absorption, and improve overall soil microflora.',
                'image': 'images/1.jpg',
                'cta': 'Enquire Now',
                'benefits': [
                    'Enhances soil fertility and crop yields',
                    'Reduces the need for chemical fertilizers',
                    'Supports eco-friendly farming practices',
                    'Boosts crop yields by 20%',
                    'Reduces organic waste by 60%',
                    'Provides slow-release nutrients for long-term plant health',
                    'Enriches soil with beneficial microbes',
                    'Boosts plant resilience against pests and diseases',
                    '100% organic—safe for the environment and pollinators'
                ],
                'usage_instructions': [
                    {
                        'step': 'Dilution Instructions',
                        'details': 'EcoVita liquid fertilizers are concentrated and need to be diluted before use. Check the product label for exact ratios, but a general rule is 100mls of EcoVita per gallon of water for most plants.'
                    },
                    {
                        'step': 'Soil Drench (Root Feeding)',
                        'details': 'Pour the diluted mixture directly around the base of plants. Improves root development and overall plant health. Apply every 7 days during the growing season.'
                    },
                    {
                        'step': 'Foliar Spray (Leaf Feeding)',
                        'details': 'Pour the diluted solution into a spray bottle or garden sprayer. Spray leaves early in the morning or late in the evening. Helps plants absorb nutrients quickly through the foliage.'
                    },
                    {
                        'step': 'Best Time to Apply',
                        'details': 'Vegetables & Flowers: Every 2 weeks during active growth. Fruit Trees: Early spring and mid-season for healthy fruiting. Houseplants: Once a month for steady growth.'
                    },
                    {
                        'step': 'Storage & Precautions',
                        'details': 'Store in a cool, dry place away from direct sunlight. Shake well before use. Avoid overdose.'
                    }
                ]
            }
        ],
        
        # Success stories (formerly testimonials) with enhanced structure
        'success_stories': [
            {
                'client': 'AquaFarm Solutions',
                'location': 'Tanzania',
                'person': 'John Mwakazi',
                'role': 'Owner',
                'quote': 'Novfeed\'s fish feed has increased our fish growth rate by 25%, and we\'ve cut feed costs by 30%.',
                'metrics': [
                    {'label': 'Increased Growth', 'value': '25%'},
                    {'label': 'Reduced Feed Costs', 'value': '30%'},
                    {'label': 'Water Quality Improvement', 'value': '30%'}
                ],
                'image': 'images/stories/farmer1.jpg'
            },
            {
                'client': 'GreenFields Agriculture',
                'location': 'Tanzania',
                'person': 'Grace Makundi',
                'role': 'Lead Coordinator',
                'quote': 'With EcoVita our crop yields have improved by 20%, and the soil health on our farm has never been better.',
                'metrics': [
                    {'label': 'Yield Increase', 'value': '20%'},
                    {'label': 'Fertilizer Reduction', 'value': '25%'},
                    {'label': 'Cost Savings', 'value': '20%'}
                ],
                'image': 'images/stories/farmer2.jpg'
            },
            {
                'client': 'Coastal Food Processing',
                'location': 'Dar es Salaam, Tanzania',
                'person': 'David Kimaro',
                'role': 'Operations Manager',
                'quote': 'The waste conversion service has turned what was once a disposal expense into a valuable resource stream for our food processing plant. Novfeed\'s innovative approach has helped us reduce our environmental footprint while improving our bottom line.',
                'metrics': [
                    {'label': 'Waste Reduction', 'value': '85%'},
                    {'label': 'Cost Savings', 'value': '35%'},
                    {'label': 'Carbon Footprint Reduction', 'value': '40%'}
                ],
                'image': 'images/stories/manager1.jpg'
            }
        ],
        
        # FAQ section with expanded categories and questions from the product document
        'faq_categories': [
            {
                'name': 'Products',
                'questions': [
                    {
                        'question': 'How does Novfeed Protein compare to traditional fishmeal?',
                        'answer': 'Novfeed Protein typically outperforms traditional fishmeal with 15-25% faster growth rates, improved feed conversion ratios, and better fish health outcomes. This is due to our optimized protein profile and essential nutrient blend derived from our proprietary conversion process. Unlike fishmeal, our product is sustainably produced without depleting ocean resources.'
                    },
                    {
                        'question': 'Is EcoVita suitable for all types of crops?',
                        'answer': 'EcoVita works exceptionally well with a wide range of crops including vegetables, fruits, cereals, and ornamentals. It\'s particularly effective for crops with high nutrient demands and has shown outstanding results with rice, maize, and various vegetables. We can provide specific application guidelines for your particular crops upon request.'
                    },
                    {
                        'question': 'Do you offer product samples before purchase?',
                        'answer': 'Yes, we offer sample packages of both our Novfeed Protein and EcoVita products for new customers who want to test effectiveness before committing to larger orders. Contact our sales team to request samples, and we\'ll provide application guidance to ensure optimal results during your trial period.'
                    },
                    {
                        'question': 'Is Novfeed fish feed suitable for all fish species?',
                        'answer': 'Yes, our feed is formulated to support a wide range of fish species. We offer different variants for different fish sizes and stages of growth, from fry to adult fish.'
                    },
                    {
                        'question': 'Can EcoVita be used for organic farming?',
                        'answer': 'Absolutely! EcoVita is perfect for eco-friendly farming. It\'s made from 100% organic waste and contains no synthetic chemicals, making it ideal for organic certification.'
                    }
                ]
            },
            {
                'name': 'Services',
                'questions': [
                    {
                        'question': 'What does the feasibility study process involve?',
                        'answer': 'Our feasibility study process involves a comprehensive assessment of your proposed aquaculture project including site evaluation, water quality testing, market analysis, financial projections, and regulatory considerations. We provide a detailed report with clear recommendations and an implementation roadmap. The typical timeline is 3-4 weeks, depending on project complexity.'
                    },
                    {
                        'question': 'How frequent are on-site consulting visits?',
                        'answer': 'The frequency of on-site consulting visits is tailored to your specific needs and project phase. For new operations, we typically schedule bi-weekly visits during the first three months, then monthly thereafter. Established operations may require only quarterly visits for optimization. We also offer emergency troubleshooting visits as needed.'
                    },
                    {
                        'question': 'What data do you collect from farms and how is it used?',
                        'answer': 'We collect data on water quality parameters, feed consumption, growth rates, mortality, environmental conditions, and operational practices. This data is analyzed to identify optimization opportunities, predict potential issues before they occur, and benchmark performance against industry standards. All data is kept confidential and used solely to improve your farm\'s performance.'
                    }
                ]
            },
            {
                'name': 'Technology',
                'questions': [
                    {
                        'question': 'What is the core technology behind Novfeed products?',
                        'answer': 'Novfeed\'s proprietary biotechnology platform transforms organic waste into high-quality, sustainable products. Using microbial fermentation, we convert waste into nutrient-rich fish feed and organic fertilizer, creating a circular economy solution for aquaculture and agriculture.'
                    },
                    {
                        'question': 'What are the environmental benefits of your technology?',
                        'answer': 'Our technology reduces greenhouse gas emissions by repurposing organic waste, minimizes reliance on wild-caught fishmeal and chemical fertilizers, and promotes sustainable farming and aquaculture practices. This creates a true circular economy solution.'
                    }
                ]
            }
        ],
        
        # Environmental impact section derived from the product document
        'environmental_impact': {
            'title': 'Sustainability and Environmental Impact',
            'description': 'Both our products are made from upcycled organic waste, reducing landfill use and promoting a circular economy.',
            'benefits': [
                {
                    'title': 'Reduced Waste',
                    'description': 'Our products repurpose organic waste that would otherwise end up in landfills.',
                    'icon': 'fas fa-recycle'
                },
                {
                    'title': 'Lower Carbon Footprint',
                    'description': 'By reducing reliance on wild-caught fishmeal and chemical fertilizers, we help decrease carbon emissions.',
                    'icon': 'fas fa-leaf'
                },
                {
                    'title': 'Circular Economy',
                    'description': 'We transform waste into valuable products, creating a sustainable closed-loop system.',
                    'icon': 'fas fa-sync-alt'
                },
                {
                    'title': 'Resource Conservation',
                    'description': 'Our practices help conserve wild fish stocks and reduce the need for synthetic fertilizers.',
                    'icon': 'fas fa-water'
                }
            ]
        },
        
        # Performance metrics derived from the product document
        'performance_metrics': {
            'Novfeed': [
                {
                    'metric': 'Growth Rate Increase',
                    'value': '25%',
                    'icon': 'fas fa-chart-line'
                },
                {
                    'metric': 'Feed Cost Reduction',
                    'value': '30%',
                    'icon': 'fas fa-coins'
                },
                {
                    'metric': 'Environmental Waste Reduction',
                    'value': '50%',
                    'icon': 'fas fa-trash-alt'
                },
                {
                    'metric': 'Fish Survival Rate',
                    'value': '97%',
                    'icon': 'fas fa-fish'
                }
            ],
            'ecovita': [
                {
                    'metric': 'Crop Yield Increase',
                    'value': '20%',
                    'icon': 'fas fa-seedling'
                },
                {
                    'metric': 'Organic Waste Reduction',
                    'value': '60%',
                    'icon': 'fas fa-recycle'
                },
                {
                    'metric': 'Chemical Fertilizer Reduction',
                    'value': '40%',
                    'icon': 'fas fa-flask'
                },
                {
                    'metric': 'Soil Health Improvement',
                    'value': '35%',
                    'icon': 'fas fa-spa'
                }
            ]
        }
    }
    
    return render(request, 'products.html', context)

from django.shortcuts import render

def research(request):
    # Research Vision
    
    # Research Areas
    research_areas = [
        {
            'name': 'Bacteria Based Protein',
            'description': 'Innovative protein production using single-cell bacteria technologies',
            'icon': 'fa-bacteria',
            'color': '#2ecc71',
            'image': 'images/rd2.jpg',
            'details': 'Developing advanced bacterial strains to create sustainable, high-quality protein sources for aquaculture and agriculture.'
        },
        {
            'name': 'Fish Feed Production',
            'description': 'Advanced nutritional solutions for sustainable aquaculture',
            'icon': 'fa-fish',
            'color': '#3498db',
            'image': 'images/rd1.jpg',
            'details': 'Creating innovative fish feed solutions that improve nutrition, sustainability, and performance in aquaculture production.'
        }
    ]
    
    context = {
        'title': 'R & D',
        'page': 'research',
        'research_areas': research_areas
    }
    
    return render(request, 'research.html', context)

from django.shortcuts import render

def careers(request):
    # Company Culture Highlights
    culture_highlights = [
        {
            'icon': 'fa-leaf',
            'title': 'Sustainability First',
            'description': 'We believe in creating meaningful impact through innovative solutions that transform waste into valuable resources.'
        },
        {
            'icon': 'fa-users',
            'title': 'Collaborative Environment',
            'description': 'Our team thrives on open communication, creativity, and mutual support across disciplines.'
        },
        {
            'icon': 'fa-chart-line',
            'title': 'Continuous Growth',
            'description': 'We invest in our employees\' professional development and provide opportunities for learning and advancement.'
        }
    ]

    # Open Positions
    open_positions = [
        {
            'id': 1,
            'title': 'Senior Biotechnologist',
            'department': 'Research & Development',
            'location': 'Dar es Salaam, Tanzania',
            'type': 'Full-time',
            'description': 'We are seeking an innovative biotechnologist to lead our microbial engineering research, developing sustainable solutions for waste processing.',
            'requirements': [
                'PhD in Biotechnology or related field',
                '5+ years of research experience',
                'Strong background in microbial engineering',
                'Publication record in peer-reviewed journals'
            ]
        },
        {
            'id': 2,
            'title': 'Sustainability Analyst',
            'department': 'Impact & Strategy',
            'location': 'Dar es Salaam, Tanzania',
            'type': 'Full-time',
            'description': 'Join our team to analyze and develop strategies that maximize our environmental and social impact.',
            'requirements': [
                'Master\'s degree in Sustainability or related field',
                '3+ years of experience in sustainability consulting',
                'Strong data analysis skills',
                'Passion for environmental innovation'
            ]
        },
        {
            'id': 3,
            'title': 'Business Development Manager',
            'department': 'Sales & Partnerships',
            'location': 'Dar es Salaam, Tanzania',
            'type': 'Full-time',
            'description': 'We are looking for a dynamic professional to drive our business growth and develop strategic partnerships.',
            'requirements': [
                'Bachelor\'s degree in Business or related field',
                '4+ years of business development experience',
                'Strong networking and communication skills',
                'Experience in sustainability or agritech sectors'
            ]
        }
    ]

    # Employee Testimonials
    testimonials = [
        {
            'name': 'Michael Kimani',
            'position': 'Lead Researcher',
            'quote': 'At Novfeed, I\'m not just doing a job – I\'m solving real-world challenges and making a tangible difference in sustainability.',
            'image': 'images/team/michael.jpg'
        },
        {
            'name': 'Sarah Mwangi',
            'position': 'Sustainability Analyst',
            'quote': 'The collaborative culture and commitment to innovation here are unlike anywhere else. Every day brings new opportunities to create impact.',
            'image': 'images/team/sarah.jpg'
        }
    ]

    # Benefits
    benefits = [
        {
            'icon': 'fa-medical-briefcase',
            'title': 'Comprehensive Health Coverage',
            'description': 'Full medical, dental, and vision insurance for you and your family.'
        },
        {
            'icon': 'fa-graduation-cap',
            'title': 'Professional Development',
            'description': 'Annual learning budget, conference sponsorships, and continuous skill development programs.'
        },
        {
            'icon': 'fa-laptop',
            'title': 'Flexible Work Options',
            'description': 'Hybrid work model with flexible hours and modern remote work support.'
        },
        {
            'icon': 'fa-solar-panel',
            'title': 'Sustainability Perks',
            'description': 'Green commute allowance, renewable energy credits, and sustainability workshops.'
        }
    ]

    context = {
        'title': 'Careers at Novfeed',
        'page': 'careers',
        'culture_highlights': culture_highlights,
        'open_positions': open_positions,
        'testimonials': testimonials,
        'benefits': benefits
    }
    
    return render(request, 'careers.html', context)







from django.shortcuts import render, get_object_or_404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.generic import ListView, DetailView
from django.db.models import Count
from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank
from .models import Post, Category, Tag
from .forms import CommentForm, SearchForm

def post_list(request, category_slug=None, tag_slug=None):
    posts = Post.objects.filter(status='published')
    category = None
    tag = None
    
    # Filter by category if provided
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        posts = posts.filter(category=category)
    
    # Filter by tag if provided
    if tag_slug:
        tag = get_object_or_404(Tag, slug=tag_slug)
        posts = posts.filter(tags__in=[tag])
    
    # Pagination: 6 posts per page
    paginator = Paginator(posts, 6)
    page = request.GET.get('page')
    
    try:
        posts_page = paginator.page(page)
    except PageNotAnInteger:
        # If page not integer, deliver first page
        posts_page = paginator.page(1)
    except EmptyPage:
        # If page out of range, deliver last page
        posts_page = paginator.page(paginator.num_pages)
    
    # Get most common tags
    common_tags = Tag.objects.annotate(
        num_posts=Count('posts')
    ).filter(num_posts__gt=0).order_by('-num_posts')[:10]
    
    # Get featured posts
    featured_posts = Post.objects.filter(status='published', featured=True)[:3]
    
    # Get recent posts
    recent_posts = Post.objects.filter(status='published').order_by('-publish')[:5]
    
    return render(request, 'news.html', {
        'posts': posts_page,
        'page': page,
        'category': category,
        'tag': tag,
        'common_tags': common_tags,
        'featured_posts': featured_posts,
        'recent_posts': recent_posts,
    })


def post_detail(request, year, month, day, slug):
    post = get_object_or_404(Post, 
                            slug=slug,
                            status='published',
                            publish__year=year,
                            publish__month=month,
                            publish__day=day)
    
    # Increment view count
    post.increment_views()
    
    # List of active comments for this post
    comments = post.comments.filter(active=True)
    
    # Form for users to comment
    comment_form = None
    new_comment = None
    
    if request.method == 'POST':
        # A comment was posted
        comment_form = CommentForm(data=request.POST)
        if comment_form.is_valid():
            # Create Comment object but don't save to database yet
            new_comment = comment_form.save(commit=False)
            # Assign the current post to the comment
            new_comment.post = post
            # Save the comment to the database
            new_comment.save()
    else:
        comment_form = CommentForm()
    
    # List of similar posts
    post_tags_ids = post.tags.values_list('id', flat=True)
    similar_posts = Post.objects.filter(status='published', tags__in=post_tags_ids)\
                                .exclude(id=post.id)
    similar_posts = similar_posts.annotate(same_tags=Count('tags'))\
                                .order_by('-same_tags', '-publish')[:3]
    
    return render(request, 'news_detail.html', {
        'post': post,
        'comments': comments,
        'comment_form': comment_form,
        'new_comment': new_comment,
        'similar_posts': similar_posts,
    })


def post_search(request):
    form = SearchForm()
    query = None
    results = []
    
    if 'query' in request.GET:
        form = SearchForm(request.GET)
        if form.is_valid():
            query = form.cleaned_data['query']
            search_vector = SearchVector('title', weight='A') + SearchVector('content', weight='B')
            search_query = SearchQuery(query)
            results = Post.objects.filter(status='published')\
                .annotate(
                    search=search_vector,
                    rank=SearchRank(search_vector, search_query)
                ).filter(rank__gte=0.3).order_by('-rank')
    
    return render(request, 'search.html', {
        'form': form,
        'query': query,
        'results': results,
    })


# Class-based alternative views
class PostListView(ListView):
    queryset = Post.objects.filter(status='published')
    context_object_name = 'posts'
    paginate_by = 6
    template_name = 'news.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['common_tags'] = Tag.objects.annotate(
            num_posts=Count('posts')
        ).filter(num_posts__gt=0).order_by('-num_posts')[:10]
        context['featured_posts'] = Post.objects.filter(status='published', featured=True)[:3]
        context['recent_posts'] = Post.objects.filter(status='published').order_by('-publish')[:5]
        return context


class PostDetailView(DetailView):
    model = Post
    template_name = 'news_detail.html'
    context_object_name = 'post'
    
    def get_object(self):
        post = super().get_object()
        post.increment_views()
        return post
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        post = self.get_object()
        
        # Comments
        context['comments'] = post.comments.filter(active=True)
        context['comment_form'] = CommentForm()
        
        # Similar posts
        post_tags_ids = post.tags.values_list('id', flat=True)
        similar_posts = Post.objects.filter(status='published', tags__in=post_tags_ids)\
                                    .exclude(id=post.id)
        context['similar_posts'] = similar_posts.annotate(same_tags=Count('tags'))\
                                  .order_by('-same_tags', '-publish')[:3]
        
        return context
    
    #################################################################################################
from django.contrib import messages
from django.http import JsonResponse
from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import render, redirect
from .models import Enquiry
from .forms import EnquiryForm

def enquire(request):
    """View for handling the enquiry form page and submissions"""
    
    # Get the product from query parameter if available
    initial_product = request.GET.get('product', '')
    initial_service = request.GET.get('service', '')
    
    if initial_product:
        for code, name in Enquiry.PRODUCT_CHOICES:
            if name.lower() == initial_product.lower():
                initial_product = code
                break
    
    if initial_service:
        for code, name in Enquiry.SERVICE_CHOICES:
            if name.lower() == initial_service.lower():
                initial_service = code
                break
    
    initial_data = {}
    if initial_product:
        initial_data['product_interest'] = initial_product
    if initial_service:
        initial_data['service_interest'] = initial_service
    
    if request.method == 'POST':
        form = EnquiryForm(request.POST)
        if form.is_valid():
            # Save the form but don't commit to database yet
            enquiry = form.save(commit=False)
            # Save to database
            enquiry.save()
            
            # Send email notification to admin
            subject = f"New Enquiry: {enquiry.name} from {enquiry.company or 'Individual'}"
            message = f"""
            You have received a new enquiry from your website:
            
            Name: {enquiry.name}
            Email: {enquiry.email}
            Phone: {enquiry.phone or 'Not provided'}
            Company: {enquiry.company or 'Not provided'}
            Country: {enquiry.country or 'Not provided'}
            Product Interest: {enquiry.get_product_interest_display() if enquiry.product_interest else 'Not specified'}
            Service Interest: {enquiry.get_service_interest_display() if enquiry.service_interest else 'Not specified'}
            
            Message:
            {enquiry.message}
            
            Date: {enquiry.created_at.strftime('%Y-%m-%d %H:%M')}
            """
            
            try:
                send_mail(
                    subject,
                    message,
                    settings.DEFAULT_FROM_EMAIL,
                    [settings.ADMIN_EMAIL],
                    fail_silently=False,
                )
            except Exception as e:
                # Log the error but don't prevent form submission
                print(f"Error sending email notification: {str(e)}")
            
            if request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({'success': True, 'message': 'Thank you for your enquiry. We will get back to you soon.'})
            else:
                messages.success(request, 'Thank you for your enquiry. We will get back to you soon.')
                return redirect('enquiry_success')
        else:
            if request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({'success': False, 'errors': form.errors})
    else:
        form = EnquiryForm(initial=initial_data)
    
    context = {
        'title': 'Contact Us | Novfeed Solutions',
        'page': 'enquire',
        'form': form,
    }
    
    return render(request, 'enquire.html', context)

def enquiry_success(request):
    """View for displaying the success page after an enquiry submission"""
    context = {
        'title': 'Thank You | Novfeed Solutions',
        'page': 'enquiry_success',
    }
    return render(request, 'enquiry_success.html', context)

from django.shortcuts import render

def awards_view(request):
    """
    View function for displaying the awards page.
    """
    context = {
        'title': 'Our Awards',
        'awards': [
            {
                'title': 'Sustainability Excellence Award',
                'organization': 'World Aquaculture Society',
                'year': '2024',
                'description': 'Recognized for outstanding contribution to sustainable aquaculture practices.',
                'image': 'images/award1.jpg',
            },
            {
                'title': 'Innovation in Feed Technology',
                'organization': 'African Aquaculture Association',
                'year': '2023',
                'description': 'Awarded for groundbreaking insect-based feed solutions.',
                'image': 'images/award2.webp',
            },
            {
                'title': 'Best Startup in Agriculture',
                'organization': 'East African Business Council',
                'year': '2023',
                'description': 'Recognized as a leading agricultural innovation company in East Africa.',
                'image': 'images/award3.jpg',
            },
            {
                'title': 'Environmental Impact Award',
                'organization': 'Global Sustainability Forum',
                'year': '2022',
                'description': 'Honored for significant contributions to reducing environmental footprints in fish farming.',
                'image': 'images/award4.jpg',
            },
        ]
    }
    return render(request, 'awards.html', context)


from django.shortcuts import render

def technology_view(request):
    """
    View for displaying the Technology page.
    """
    # Context data for the technology page
    context = {
        'title': 'Technology - NovFeed',
        'tech_intro': {
            'tagline': 'Science.Future.Feed',
            'overview': 'At NovFeed, we\'ve developed cutting-edge microbial technology that converts organic waste into high-protein fish feed and nutrient-rich organic fertilizer. Our solutions reduce environmental impact, promote sustainability, and support the future of food production.'
        },
        'core_problem': {
            'statement': 'The aquaculture and agriculture industries face significant challenges, including environmental degradation, reliance on unsustainable resources like wild-caught fishmeal and chemical fertilizers, and inefficiencies in feed and farming practices. These issues threaten global food security and the health of our planet.',
            'data': [
                'Over 20% of global fish stocks are used for fishmeal production, contributing to overfishing and ecosystem collapse.',
                'Chemical fertilizers account for 10% of global greenhouse gas emissions, while organic waste continues to pollute landfills and waterways.'
            ]
        },
        'process': {
            'description': 'NovFeed\'s proprietary microbial fermentation process breaks down organic waste into high-quality proteins and nutrients. These are then transformed into sustainable fish feed and organic fertilizer, creating a closed-loop system that minimizes waste and maximizes resource efficiency.',
            'features': [
                {'title': 'Efficient Waste Conversion', 'description': 'Converts organic waste into valuable products.'},
                {'title': 'Sustainable Nutrient Release', 'description': 'Ensures optimal nutrient absorption for fish and crops.'},
                {'title': 'Eco-Friendly and Scalable', 'description': 'Designed for minimal environmental impact and adaptable to various production scales.'}
            ]
        },
        'benefits': {
            'environmental': [
                'Reduces organic waste in landfills and waterways.',
                'Promotes a circular economy by repurposing waste into valuable resources.',
                'Cuts greenhouse gas emissions by replacing traditional fishmeal and chemical fertilizers.'
            ],
            'performance': [
                'Improves fish growth rates by up to 25%.',
                'Boosts crop yields by 20% while enhancing soil health.',
                'Reduces feed and fertilizer costs by 30%, increasing farm profitability.'
            ],
            'sustainability': 'Our technology aligns with the United Nations Sustainable Development Goals (SDGs), including Zero Hunger, Responsible Consumption and Production, and Climate Action.'
        },
        'innovations': [
            {
                'title': 'Energy Efficiency',
                'description': 'Our production process is designed to minimize energy use, making it one of the most energy-efficient solutions in the industry.',
                'icon': 'fas fa-bolt'
            },
            {
                'title': 'Scalability',
                'description': 'NovFeed\'s technology is scalable, making it suitable for small-scale farmers and large-scale producers alike.',
                'icon': 'fas fa-expand-arrows-alt'
            },
            {
                'title': 'Research and Development',
                'description': 'We are continuously investing in R&D to enhance our technology, improve efficiency, and expand its applications in aquaculture and agriculture.',
                'icon': 'fas fa-flask'
            }
        ],
        'metrics': [
            {'value': '60%', 'label': 'Reduction in Organic Waste', 'icon': 'fas fa-recycle'},
            {'value': '40%', 'label': 'Reduction in Greenhouse Gas Emissions', 'icon': 'fas fa-cloud'},
            {'value': '90%', 'label': 'Waste to Feed Conversion Efficiency', 'icon': 'fas fa-cogs'}
        ]
    }
    
    return render(request, 'technology.html', context)