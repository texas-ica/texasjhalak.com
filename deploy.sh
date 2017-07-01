# Remove old repo
echo "Removing old repository"
rm -rf texasjhalak.com

# Clone new repo
echo "Cloning new repository"
git clone https://github.com/texas-ica/texasjhalak.com &> /dev/null

# Stop NGINX
echo "Shutting down NGINX"
sudo service nginx stop &> /dev/null

# Stop Node processes
echo "Stopping Node.js"
sudo killall node &> /dev/null

# Set up Node server
echo "Setting up Node.js server"
cd texasjhalak.com
npm install &> /dev/null

# Start NGINX server
echo "Starting NGINX server"
sudo service nginx start &> /dev/null

# Start server
echo "Starting Node.js server"
sudo nohup node app.js &> /dev/null
