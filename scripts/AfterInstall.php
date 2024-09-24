<?php

class AfterInstall
{
    protected $container;

    public function run($container)
    {
        $this->container = $container;

        $this->clearCache();
        $this->setStreamFullDateTime();
        $entityManager = $container->get('entityManager');
    }

    protected function clearCache()
    {
        try {
            $this->container->get('dataManager')->clearCache();
        } catch (\Exception $e) {}
    }

    protected function setStreamFullDateTime()
    {
            $config = $this->container->get('config');
            $config->set('streamFullDateTime', true);
            $config->save();
    }
}