const GOOGLE_CLOUD_KEY = process.env.GOOGLE_CLOUD_KEY;
const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;

module.exports = {
  googlePlaces: {
    getGroceryUrl: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=3000&type=grocery&key=${GOOGLE_CLOUD_KEY}&keyword=grocery`,
    getPhotoUrl: `https://maps.googleapis.com/maps/api/place/photo?key=${GOOGLE_CLOUD_KEY}&maxwidth=600&photoreference=`,
    mapsUrl: `https://www.google.com/maps/place/?q=place_id:`
  },
  productSearch: {
    queryUrl: `https://api.spoonacular.com/food/products/search?number=9&apiKey=${SPOONACULAR_API_KEY}&query=`
  },
  mySql: {
    host: 'ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'atl9gh0n9ibhuu5p',
    password: 'csbxzy852g3cvkyn',
    database: 'f51qdfp6h2j59rfu'
  },
  staticPlacesResponse: [
    {
      'business_status': 'OPERATIONAL',
      'geometry': {
        'location': {
          'lat': 38.3211841,
          'lng': -122.3018271
        },
        'viewport': {
          'northeast': {
            'lat': 38.32267927989272,
            'lng': -122.3006238701073
          },
          'southwest': {
            'lat': 38.31997962010728,
            'lng': -122.3033235298927
          }
        }
      },
      'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      'name': 'Safeway',
      'opening_hours': {
        'open_now': true
      },
      'photos': [
        {
          'height': 3264,
          'html_attributions': [
            '<a href="https://maps.google.com/maps/contrib/117677571354399780432">Martin Monroe</a>'
          ],
          'photo_reference': 'ATtYBwIVLiVwk_2zy6mFpTaU16m2P5PQNRvKN755e23ptjb04XT1ozC4ueuHi7fuqbKiTm_EmM3GKhxr4JRZDxQ7hiLKs7TIBbVWAAACH3ZqFwbkV8Nx_XHXmv0fONM5h1sGjJDVpn7HrI0MJrVfFDZql2W2kX2Icn01VZYiJcsk7p3TOz1q',
          'width': 2448
        }
      ],
      'place_id': 'ChIJZ91Het0GhYARSb2BbGLvIl0',
      'plus_code': {
        'compound_code': '8MCX+F7 Napa, California',
        'global_code': '84CV8MCX+F7'
      },
      'price_level': 2,
      'rating': 4.1,
      'reference': 'ChIJZ91Het0GhYARSb2BbGLvIl0',
      'scope': 'GOOGLE',
      'types': [
        'grocery_or_supermarket',
        'food',
        'point_of_interest',
        'store',
        'establishment'
      ],
      'user_ratings_total': 765,
      'vicinity': '3375 Jefferson St, Napa',
      'mapsUrl': 'https://www.google.com/maps/place/?q=place_id:ChIJZ91Het0GhYARSb2BbGLvIl0'
    },
    {
      'business_status': 'OPERATIONAL',
      'geometry': {
        'location': {
          'lat': 38.3227963,
          'lng': -122.3058353
        },
        'viewport': {
          'northeast': {
            'lat': 38.32405022989272,
            'lng': -122.3046090201073
          },
          'southwest': {
            'lat': 38.32135057010727,
            'lng': -122.3073086798927
          }
        }
      },
      'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      'name': 'Trader Joe\'s',
      'opening_hours': {
        'open_now': true
      },
      'photos': [
        {
          'height': 3264,
          'html_attributions': [
            '<a href="https://maps.google.com/maps/contrib/114499114048145429934">Ashley Mccarty</a>'
          ],
          'photo_reference': 'ATtYBwK5tkzb7s92iC77R8yTtsqbu8DVVzfTiaj11QeWk2zVn-oRZCWUhb-zUMPIRpOFl2m9j6NhPFYMxmFE_5ofyYhNp77Mw0lpFWXFTJEaN_EWHO0Kqn84gvYiDp6oUU7FK21ha6LGdiPtCez0TeSb7RJ5y3IJ8VW1CWZU0oNB5gG1Pm9J',
          'width': 2448
        }
      ],
      'place_id': 'ChIJ010Dit4GhYARDH_7Sg6R2Tk',
      'plus_code': {
        'compound_code': '8MFV+4M Napa, California',
        'global_code': '84CV8MFV+4M'
      },
      'price_level': 2,
      'rating': 4.6,
      'reference': 'ChIJ010Dit4GhYARDH_7Sg6R2Tk',
      'scope': 'GOOGLE',
      'types': [
        'grocery_or_supermarket',
        'florist',
        'supermarket',
        'liquor_store',
        'food',
        'health',
        'point_of_interest',
        'store',
        'establishment'
      ],
      'user_ratings_total': 519,
      'vicinity': '3654 Bel Aire Plaza, Napa',
      'mapsUrl': 'https://www.google.com/maps/place/?q=place_id:ChIJ010Dit4GhYARDH_7Sg6R2Tk'
    },
    {
      'business_status': 'OPERATIONAL',
      'geometry': {
        'location': {
          'lat': 38.3362066,
          'lng': -122.3231663
        },
        'viewport': {
          'northeast': {
            'lat': 38.33752632989272,
            'lng': -122.3218754701073
          },
          'southwest': {
            'lat': 38.33482667010728,
            'lng': -122.3245751298927
          }
        }
      },
      'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      'name': 'Ranch Market',
      'opening_hours': {
        'open_now': true
      },
      'photos': [
        {
          'height': 2048,
          'html_attributions': [
            '<a href="https://maps.google.com/maps/contrib/116418254005302142023">Winnie S</a>'
          ],
          'photo_reference': 'ATtYBwIC1fha-vt9TXV_JjsjzIUaamJmSobu4La0-Li1wzbDl1ZDz9RyO4ZUZKthJLi9QHryke17gQL-2DK27CVTtqt6gjuioNGAyP_3wa9CnpEoO7cm5XntyhTCLjF9f9tTvPlkk3umRiBomOfr3v9_Yag0YTRXmBtqCLfhwmbZzozkjze7',
          'width': 1152
        }
      ],
      'place_id': 'ChIJ1RHBhM0AhYARdBP2zTMFhY4',
      'plus_code': {
        'compound_code': '8MPG+FP Napa, California',
        'global_code': '84CV8MPG+FP'
      },
      'rating': 4.4,
      'reference': 'ChIJ1RHBhM0AhYARdBP2zTMFhY4',
      'scope': 'GOOGLE',
      'types': [
        'grocery_or_supermarket',
        'food',
        'point_of_interest',
        'store',
        'establishment'
      ],
      'user_ratings_total': 103,
      'vicinity': '4215 Solano Ave, Napa',
      'mapsUrl': 'https://www.google.com/maps/place/?q=place_id:ChIJ1RHBhM0AhYARdBP2zTMFhY4'
    },
    {
      'business_status': 'OPERATIONAL',
      'geometry': {
        'location': {
          'lat': 38.30568299999999,
          'lng': -122.30294
        },
        'viewport': {
          'northeast': {
            'lat': 38.30704122989273,
            'lng': -122.3015370701073
          },
          'southwest': {
            'lat': 38.30434157010728,
            'lng': -122.3042367298927
          }
        }
      },
      'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      'name': 'Lucky',
      'opening_hours': {
        'open_now': true
      },
      'photos': [
        {
          'height': 3024,
          'html_attributions': [
            '<a href="https://maps.google.com/maps/contrib/112610219144424672528">Clayton Light</a>'
          ],
          'photo_reference': 'ATtYBwLEvY9_Kico5rrFIngfRzDGA0ZVfP-Gw1YRosSX657-1CXB57-9Hxl0U3tQuHTDl-Amx9I6jWKhtRVObM7lUdCbG4c54kUIAhoWmxpzcg9KcptLVx6ScSc_Ie4OS4YBmpKw78cLjSsaHfvdTDDzsKXmEnCZ4jTqsp2zL90n9LfdDHs8',
          'width': 4032
        }
      ],
      'place_id': 'ChIJ3Zbvb_kGhYAR-Y-YpKNUeMg',
      'plus_code': {
        'compound_code': '8M4W+7R Napa, California',
        'global_code': '84CV8M4W+7R'
      },
      'rating': 4.2,
      'reference': 'ChIJ3Zbvb_kGhYAR-Y-YpKNUeMg',
      'scope': 'GOOGLE',
      'types': [
        'grocery_or_supermarket',
        'food',
        'point_of_interest',
        'store',
        'establishment'
      ],
      'user_ratings_total': 499,
      'vicinity': '2355 California Blvd, Napa',
      'mapsUrl': 'https://www.google.com/maps/place/?q=place_id:ChIJ3Zbvb_kGhYAR-Y-YpKNUeMg'
    },
    {
      'business_status': 'OPERATIONAL',
      'geometry': {
        'location': {
          'lat': 38.3231349,
          'lng': -122.3060568
        },
        'viewport': {
          'northeast': {
            'lat': 38.32448472989272,
            'lng': -122.3047069701072
          },
          'southwest': {
            'lat': 38.32178507010728,
            'lng': -122.3074066298927
          }
        }
      },
      'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      'name': 'Whole Foods Market',
      'opening_hours': {
        'open_now': true
      },
      'photos': [
        {
          'height': 1920,
          'html_attributions': [
            '<a href="https://maps.google.com/maps/contrib/110002710205356499705">Joyce Larkins</a>'
          ],
          'photo_reference': 'ATtYBwI383UJ5ZG_ar68_7AMtk1g8ljx2aZ7d-Z40MfKwiMF0OUGJ5fxC8sFDs7niXoCZu9bzB06WzSh9CbCmac2I9RgDwMXWe6xAwaoQxhR_7_76mmxBAr9taVI4XcBjRTNsigp97X5ox2PA1Acgc6HCgpILwUnuO4u9oNb6ZdIVGtfgAyR',
          'width': 1080
        }
      ],
      'place_id': 'ChIJcVflxd4GhYARsBj4O14K-30',
      'plus_code': {
        'compound_code': '8MFV+7H Napa, California',
        'global_code': '84CV8MFV+7H'
      },
      'price_level': 3,
      'rating': 4.3,
      'reference': 'ChIJcVflxd4GhYARsBj4O14K-30',
      'scope': 'GOOGLE',
      'types': [
        'grocery_or_supermarket',
        'supermarket',
        'food',
        'health',
        'point_of_interest',
        'store',
        'establishment'
      ],
      'user_ratings_total': 394,
      'vicinity': '3682 Bel Aire Plaza, Napa',
      'mapsUrl': 'https://www.google.com/maps/place/?q=place_id:ChIJcVflxd4GhYARsBj4O14K-30'
    },
    {
      'business_status': 'OPERATIONAL',
      'geometry': {
        'location': {
          'lat': 38.3128124,
          'lng': -122.3127777
        },
        'viewport': {
          'northeast': {
            'lat': 38.31422032989273,
            'lng': -122.3114461201073
          },
          'southwest': {
            'lat': 38.31152067010729,
            'lng': -122.3141457798928
          }
        }
      },
      'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      'name': 'Pueblo Market',
      'opening_hours': {
        'open_now': true
      },
      'photos': [
        {
          'height': 4032,
          'html_attributions': [
            '<a href="https://maps.google.com/maps/contrib/102886992846797588773">Sean Shugar</a>'
          ],
          'photo_reference': 'ATtYBwIR6WaiNl8tYvWnr4prMqSC_4X1eryFOzM4drqD6WCDUT_TEVpqXmfbF7VfLpwXMmTAg-bOxPlpoGTlrSXxtpg5BA6PUcP2zOiedlVFUu9vXiKhshVvh5mwXiHrx2ENNWSUlI_sVPoJuxVPI1FWgEsT8Bbt1bPuiWUpTQT29wBq_TfF',
          'width': 3024
        }
      ],
      'place_id': 'ChIJz6M12B0HhYARuYZ1MxGoGXI',
      'plus_code': {
        'compound_code': '8M7P+4V Napa, California',
        'global_code': '84CV8M7P+4V'
      },
      'rating': 4.3,
      'reference': 'ChIJz6M12B0HhYARuYZ1MxGoGXI',
      'scope': 'GOOGLE',
      'types': [
        'grocery_or_supermarket',
        'food',
        'point_of_interest',
        'store',
        'establishment'
      ],
      'user_ratings_total': 41,
      'vicinity': '2107 W Pueblo Ave, Napa',
      'mapsUrl': 'https://www.google.com/maps/place/?q=place_id:ChIJz6M12B0HhYARuYZ1MxGoGXI'
    },
    {
      'business_status': 'OPERATIONAL',
      'geometry': {
        'location': {
          'lat': 38.323235,
          'lng': -122.301384
        },
        'viewport': {
          'northeast': {
            'lat': 38.32452717989272,
            'lng': -122.3000141701073
          },
          'southwest': {
            'lat': 38.32182752010728,
            'lng': -122.3027138298927
          }
        }
      },
      'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      'name': 'Lucky',
      'opening_hours': {
        'open_now': true
      },
      'photos': [
        {
          'height': 4032,
          'html_attributions': [
            '<a href="https://maps.google.com/maps/contrib/100164140572430631729">A Google User</a>'
          ],
          'photo_reference': 'ATtYBwJftPKobuzMg6HxF1YPfYlQSSTXpIT7QZOrt30guH_6zWuTWfaDy9iWHVDbNLnnqqoF_F99lGBiQRbYX3VQrzRidWaaDyQpY7EWFMfBfb1Pe9CuasDLPy9ycJp7sAapQqEMlNERHB8gMnl8qr9hvX1R0EGtARw9S4leG2NHP0PYOI5N',
          'width': 3024
        }
      ],
      'place_id': 'ChIJoxo0P90GhYARaDFGYWL6cpI',
      'plus_code': {
        'compound_code': '8MFX+7C Napa, California',
        'global_code': '84CV8MFX+7C'
      },
      'rating': 4.2,
      'reference': 'ChIJoxo0P90GhYARaDFGYWL6cpI',
      'scope': 'GOOGLE',
      'types': [
        'grocery_or_supermarket',
        'food',
        'point_of_interest',
        'store',
        'establishment'
      ],
      'user_ratings_total': 191,
      'vicinity': '1312 Trancas St, Napa',
      'mapsUrl': 'https://www.google.com/maps/place/?q=place_id:ChIJoxo0P90GhYARaDFGYWL6cpI'
    },
    {
      'business_status': 'OPERATIONAL',
      'geometry': {
        'location': {
          'lat': 38.31987,
          'lng': -122.31079
        },
        'viewport': {
          'northeast': {
            'lat': 38.32124222989272,
            'lng': -122.3093175701073
          },
          'southwest': {
            'lat': 38.31854257010728,
            'lng': -122.3120172298927
          }
        }
      },
      'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      'name': 'Grocery Outlet',
      'opening_hours': {
        'open_now': true
      },
      'photos': [
        {
          'height': 1200,
          'html_attributions': [
            '<a href="https://maps.google.com/maps/contrib/112610219144424672528">Clayton Light</a>'
          ],
          'photo_reference': 'ATtYBwLYfaVcEowD_lbbQOlN959rq001bQ8l24c8DLSrBTVtpgx_bhoIkrMo9sC2CojsWnFGXTV2rlXsNkkVZl223UKubPASD4_x1ZZf5LtjEzDC_XTDjdomX36zH-DkabqEFGyBNEmwfjN2aJRY0-RQ94Jo_SPQgCncCa6DWeLu_1-eqFqd',
          'width': 1600
        }
      ],
      'place_id': 'ChIJcXPifx0HhYARahnwimUuZKc',
      'plus_code': {
        'compound_code': '8M9Q+WM Napa, California',
        'global_code': '84CV8M9Q+WM'
      },
      'rating': 4.7,
      'reference': 'ChIJcXPifx0HhYARahnwimUuZKc',
      'scope': 'GOOGLE',
      'types': [
        'grocery_or_supermarket',
        'food',
        'health',
        'point_of_interest',
        'store',
        'establishment'
      ],
      'user_ratings_total': 52,
      'vicinity': '3385 Solano Ave, Napa',
      'mapsUrl': 'https://www.google.com/maps/place/?q=place_id:ChIJcXPifx0HhYARahnwimUuZKc'
    },
    {
      'business_status': 'OPERATIONAL',
      'geometry': {
        'location': {
          'lat': 38.3123459,
          'lng': -122.3068646
        },
        'viewport': {
          'northeast': {
            'lat': 38.31371217989272,
            'lng': -122.3054238701073
          },
          'southwest': {
            'lat': 38.31101252010728,
            'lng': -122.3081235298928
          }
        }
      },
      'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      'name': 'Amigos market',
      'opening_hours': {
        'open_now': true
      },
      'place_id': 'ChIJ48qHCeMGhYAR039Ki5-WbE8',
      'plus_code': {
        'compound_code': '8M6V+W7 Napa, California',
        'global_code': '84CV8M6V+W7'
      },
      'rating': 4.2,
      'reference': 'ChIJ48qHCeMGhYAR039Ki5-WbE8',
      'scope': 'GOOGLE',
      'types': [
        'grocery_or_supermarket',
        'food',
        'point_of_interest',
        'store',
        'establishment'
      ],
      'user_ratings_total': 26,
      'vicinity': '2815-2847 Solano Ave, Napa',
      'mapsUrl': 'https://www.google.com/maps/place/?q=place_id:ChIJ48qHCeMGhYAR039Ki5-WbE8'
    },
    {
      'business_status': 'OPERATIONAL',
      'geometry': {
        'location': {
          'lat': 38.3224735,
          'lng': -122.308191
        },
        'viewport': {
          'northeast': {
            'lat': 38.32366867989273,
            'lng': -122.3070204201073
          },
          'southwest': {
            'lat': 38.32096902010728,
            'lng': -122.3097200798927
          }
        }
      },
      'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      'name': 'Target Grocery',
      'opening_hours': {
        'open_now': true
      },
      'photos': [
        {
          'height': 270,
          'html_attributions': [
            '<a href="https://maps.google.com/maps/contrib/107528211198934864595">A Google User</a>'
          ],
          'photo_reference': 'ATtYBwKkeOR5fkUY1xFqMLYwxNMlTlpdTrDYxtZd_ivHI4CRdRCfIZvmRFQ5QBR7z-HoeGSNAEA_mefekg8MFrzSNv5EV7RzQwn0-vyFFjigmoFXeXJgAR_PX2jMMOGcCt-qmDBaQYvwRnPFXz31r7Dxl8u75l6XDQq8LJCM3GQ-Y3Ah8Jk_',
          'width': 480
        }
      ],
      'place_id': 'ChIJE6LJaQsHhYARVufHiq7U-v4',
      'plus_code': {
        'compound_code': '8MCR+XP Napa, California',
        'global_code': '84CV8MCR+XP'
      },
      'rating': 4.5,
      'reference': 'ChIJE6LJaQsHhYARVufHiq7U-v4',
      'scope': 'GOOGLE',
      'types': [
        'grocery_or_supermarket',
        'supermarket',
        'food',
        'point_of_interest',
        'store',
        'establishment'
      ],
      'user_ratings_total': 6,
      'vicinity': '4000 Bel Aire Plaza, Napa',
      'mapsUrl': 'https://www.google.com/maps/place/?q=place_id:ChIJE6LJaQsHhYARVufHiq7U-v4'
    },
    {
      'business_status': 'OPERATIONAL',
      'geometry': {
        'location': {
          'lat': 38.3152817,
          'lng': -122.2988588
        },
        'viewport': {
          'northeast': {
            'lat': 38.31667492989271,
            'lng': -122.2974242201073
          },
          'southwest': {
            'lat': 38.31397527010727,
            'lng': -122.3001238798928
          }
        }
      },
      'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      'name': 'Azteca Market - Napa',
      'opening_hours': {
        'open_now': true
      },
      'photos': [
        {
          'height': 1080,
          'html_attributions': [
            '<a href="https://maps.google.com/maps/contrib/106941404116417291487">Alejandro Hernandez</a>'
          ],
          'photo_reference': 'ATtYBwJ2wQV4CIF1d6AR6grB3rzop2e6dpJILJNl4g45Q-3IaW-EGG0V3ezt6In5MAr1Z5t-kJRNRnKlgaGKCZ6d4Et6am7FUOXGLnznNI5YduHNoRT8ZY6H0c_128gh-gerc4_-UfnWTPQ6PEEniOzLgWsOGLI6KG_G7nqlYts78R-GAm-9',
          'width': 1920
        }
      ],
      'place_id': 'ChIJ82Ghe-8GhYAR3t7DZ3IxTrY',
      'plus_code': {
        'compound_code': '8P82+4F Napa, California',
        'global_code': '84CV8P82+4F'
      },
      'rating': 4.3,
      'reference': 'ChIJ82Ghe-8GhYAR3t7DZ3IxTrY',
      'scope': 'GOOGLE',
      'types': [
        'grocery_or_supermarket',
        'food',
        'point_of_interest',
        'store',
        'establishment'
      ],
      'user_ratings_total': 161,
      'vicinity': '2995 Jefferson St, Napa',
      'mapsUrl': 'https://www.google.com/maps/place/?q=place_id:ChIJ82Ghe-8GhYAR3t7DZ3IxTrY'
    },
    {
      'business_status': 'OPERATIONAL',
      'geometry': {
        'location': {
          'lat': 38.3161006,
          'lng': -122.2975288
        },
        'viewport': {
          'northeast': {
            'lat': 38.31758982989273,
            'lng': -122.2962502701073
          },
          'southwest': {
            'lat': 38.31489017010728,
            'lng': -122.2989499298927
          }
        }
      },
      'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      'name': 'La raza',
      'photos': [
        {
          'height': 3024,
          'html_attributions': [
            '<a href="https://maps.google.com/maps/contrib/104398120413274606029">A Google User</a>'
          ],
          'photo_reference': 'ATtYBwI28Aobhm_-nWwfbW58knzURSO12LcfwHvOghXLNdGZ3R5hpgvwtniCM1ljNqsyBbe6ARJHG3pFIpPI0A3xyZswvPcE9oW-e-c0dwfjjpa5_AsHpvS7fGqCOnfNynk8LpE1ifMVJ-6W2qHUhObWgcZaRcyZMFFv6dqfjiWReCwjJkgv',
          'width': 4032
        }
      ],
      'place_id': 'ChIJpzWH7y4HhYARPdqnd2qAgKA',
      'plus_code': {
        'compound_code': '8P82+CX Napa, California',
        'global_code': '84CV8P82+CX'
      },
      'rating': 4.8,
      'reference': 'ChIJpzWH7y4HhYARPdqnd2qAgKA',
      'scope': 'GOOGLE',
      'types': [
        'grocery_or_supermarket',
        'food',
        'point_of_interest',
        'store',
        'establishment'
      ],
      'user_ratings_total': 4,
      'vicinity': 'Jefferson St, Napa',
      'mapsUrl': 'https://www.google.com/maps/place/?q=place_id:ChIJpzWH7y4HhYARPdqnd2qAgKA'
    },
    {
      'business_status': 'OPERATIONAL',
      'geometry': {
        'location': {
          'lat': 38.3224448,
          'lng': -122.3081446
        },
        'viewport': {
          'northeast': {
            'lat': 38.32398777989273,
            'lng': -122.3065026201073
          },
          'southwest': {
            'lat': 38.32128812010728,
            'lng': -122.3092022798927
          }
        }
      },
      'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      'name': 'Target',
      'opening_hours': {
        'open_now': true
      },
      'photos': [
        {
          'height': 1080,
          'html_attributions': [
            '<a href="https://maps.google.com/maps/contrib/112171691862612745248">Rick Vega</a>'
          ],
          'photo_reference': 'ATtYBwJTRtHglOPaIVBgZMM8eVvcklIObmN39Qx2kKdeXf2S_Zjri6zSXTFl-19pqoitWhS-aw2mfhcWZPj-XJrkFjmV3md0KDkBqp54I_x_-KPCmQFmQMBp-3yuJKaKF4eYK4W4ETsnLVvYF1qXhXYZUCnfLpKXqWfg_DMe9mwGiYWnrjqP',
          'width': 1920
        }
      ],
      'place_id': 'ChIJU_A84t4GhYARF6wrclGSYgU',
      'plus_code': {
        'compound_code': '8MCR+XP Napa, California',
        'global_code': '84CV8MCR+XP'
      },
      'price_level': 2,
      'rating': 4.2,
      'reference': 'ChIJU_A84t4GhYARF6wrclGSYgU',
      'scope': 'GOOGLE',
      'types': [
        'department_store',
        'grocery_or_supermarket',
        'electronics_store',
        'furniture_store',
        'home_goods_store',
        'food',
        'point_of_interest',
        'clothing_store',
        'store',
        'establishment'
      ],
      'user_ratings_total': 164,
      'vicinity': '4000 Bel Aire Plaza, Napa',
      'mapsUrl': 'https://www.google.com/maps/place/?q=place_id:ChIJU_A84t4GhYARF6wrclGSYgU'
    }
  ]
};
