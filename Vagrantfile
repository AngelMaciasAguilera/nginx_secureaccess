Vagrant.configure("2") do |config|
  config.vm.box = "debian/bookworm64"

  config.vm.define "nginx_machine_authsecure" do |nginx_machine_authsecure| 
    nginx_machine_authsecure.vm.network "private_network", ip: "192.168.56.10"  
    nginx_machine_authsecure.vm.provision "shell", name:"Machine provision", inline: <<-SHELL
      sudo apt-get update
      sudo apt-get install -y nginx openssl ufw

      sudo ufw enable
      sudo ufw allow ssh
      sudo ufw allow 'Nginx Full'
      sudo ufw delete allow 'Nginx HTTP'
      sudo ufw --force enable
    SHELL

    nginx_machine_authsecure.vm.provision "shell", name:"security_provision", inline: <<-SHELL

      sudo cp -vr /vagrant/example.com.crt /etc/ssl/certs/
      sudo cp -vr /vagrant/example.com.key /etc/ssl/private/
      sudo cp -vr /vagrant/example.com /etc/nginx/sites-available/
      sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
      sudo mkdir -p /var/www/example.com/html
      sudo cp -vr /vagrant/web-page/* /var/www/example.com/html/
      sudo systemctl restart nginx
    SHELL

  end
end
