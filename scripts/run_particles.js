const gridJson = {
	"particles": {
		"number": {
			"value": 150,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 100,
			"color": "#ffffff",
			"opacity": 0.8,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 2,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": true,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "window",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "repulse"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"repulse": {
				"distance": 100,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			}
		}
	},
	"retina_detect": true
}

const starsJson = {
	"particles": {
		"number": {
			"value": 500,
			"density": {
				"enable": true,
				"value_area": 789.1476416322727
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.48927153781200905,
			"random": false,
			"anim": {
				"enable": true,
				"speed": 0.2,
				"opacity_min": 0,
				"sync": false
			}
		},
		"size": {
			"value": 2,
			"random": true,
			"anim": {
				"enable": true,
				"speed": 2,
				"size_min": 0,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 0.2,
			"direction": "none",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "window",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "bubble"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 83.91608391608392,
				"size": 1,
				"duration": 3,
				"opacity": 1,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
}

particlesJS("my-particles", gridJson);

function grid() {
	particlesJS("my-particles", gridJson);
}

function stars() {
	particlesJS("my-particles", starsJson);
}

document.getElementById("button-submit").addEventListener("click", function (event) {
	event.preventDefault();
	stars();
});

document.getElementById("link").addEventListener("click", function (event) {
	event.preventDefault();
	grid();
});
