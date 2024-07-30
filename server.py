from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# Load switch profiles from JSON file
with open('../public/switchProfiles.json') as f:
    switch_profiles = json.load(f)

@app.route('/switch_profile', methods=['GET'])
def get_switch_profiles():
    # Return hostname and model for each switch profile
    return jsonify([{"hostname": profile["hostname"], "model": profile["model"]} for profile in switch_profiles])

@app.route('/config', methods=['GET'])
def get_config():
    hostname = request.args.get('hostname')
    # Find the configuration for the given hostname
    for profile in switch_profiles:
        if profile["hostname"] == hostname:
            # Assuming you want to return the entire profile as the configuration
            return jsonify(profile)
    return jsonify({"error": "Hostname not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)